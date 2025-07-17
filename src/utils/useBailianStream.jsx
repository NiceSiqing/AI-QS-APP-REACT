import { useRef } from 'react';

export function useBailianStream({
  appId,
  apiKey,
  onMessage,   // (chunk, fullText) => void
  onOpen,      // () => void
  onClose,     // (finalText) => void
  onError,     // (err) => void
}) {
  const controllerRef = useRef(null);
  const fullTextRef = useRef('');

  const sendMessage = async (data) => {
    if (!appId || !apiKey) {
      onError && onError(new Error('appId 或 apiKey 未设置'));
      return;
    }
    fullTextRef.current = '';
    const url = `https://dashscope.aliyuncs.com/api/v1/apps/${appId}/completion`;
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      onOpen && onOpen();

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: apiKey.startsWith('Bearer') ? apiKey : `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
          'Cache-Control': 'no-cache',
          'X-DashScope-SSE': 'enable',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      if (!res.ok) throw new Error(res.statusText);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data:')) {
            const content = line.slice(5).trim();
            if (content === '[DONE]') {
              onClose && onClose(fullTextRef.current);
              return;
            }
            if (content) {
              try {
                const json = JSON.parse(content);
                const text =
                  json.output?.text ||
                  json.choices?.[0]?.delta?.content ||
                  json.choices?.[0]?.text ||
                  json.text ||
                  '';
                if (text) {
                  fullTextRef.current += text;
                  onMessage && onMessage(text, fullTextRef.current);
                }
              } catch(err) {
                console.warn('流式 chunk 解析失败：', err, content);
              }
            }
          }
        }
      }
    } catch (err) {
      onError && onError(err);
    }
  };

  const abort = () => {
    controllerRef.current?.abort();
  };

  return { sendMessage, abort };
}
