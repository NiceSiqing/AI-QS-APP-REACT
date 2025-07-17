import React, { useEffect} from 'react';
import { getAiAppConfig } from '@/api/getAiAppConfig';
import { useAiConfig } from '@/context/AiConfigContext';
import { useBailianStream } from '@/utils/useBailianStream';
import ChatContent from './AiChatContent/AiChatContent';
import AiInputBox from './AiInputBox/AiInputBox';
import AiBubblePopover from './AiBubblePopover/AiBubblePopover';

export default function BailianChat({inputValue,setInputValue,messages,setMessages}) {
  const { aiConfig, setAiConfig } = useAiConfig();
  console.log(aiConfig)
  
  

  useEffect(() => {
    getAiAppConfig('HIS').then(res => {
      setAiConfig({
        appId: res.agentList?.[0]?.agentId,
        apiKey: res.agentList?.[0]?.apiKey,
      });
    });
  }, [setAiConfig]);

  // 流式 hooks（核心 AI 推理、接收流式文本）
  const { sendMessage, abort } = useBailianStream({
    appId: aiConfig?.appId,
    apiKey: aiConfig?.apiKey,
    onMessage: (chunk, fullText) => {
      // 实时更新最后一条 AI 消息
      setMessages(msgs => {
        const next = [...msgs];
        for (let i = next.length - 1; i >= 0; --i) {
          if (next[i].role === 'ai') {
            next[i] = { ...next[i], content: fullText };
            break;
          }
        }
        return next;
      });
    },
    onOpen: () => {},
    onClose: (finalText) => {},
    onError: (err) => { alert('AI 服务异常，请稍后再试'); },

  });

  if (!aiConfig) return <div>正在加载 AI 配置...</div>;

  // 发送消息逻辑，传递到 InputBox（或由 InputBox 用 props 调用）
  function handleSend() {
    if (!inputValue.trim()) return;
    setMessages(msgs => [...msgs, { role: 'user', content: inputValue }, { role: 'ai', content: '' }]);
    sendMessage({ input: { text: inputValue } });
    setInputValue('');
  }

  return (
    <div className='Main-Chat-part'>
      
        <ChatContent messages={messages} />
        <div className="ai-input-row">
            <AiBubblePopover setInputValue={setInputValue} />
            <AiInputBox
                inputValue={inputValue}
                setInputValue={setInputValue}
                onSend={handleSend}
                loading={false} 
            />

        </div>
    </div>
  );
}
