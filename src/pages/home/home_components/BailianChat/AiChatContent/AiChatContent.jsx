import './AiChatContent.less'
export default function ChatContent({ messages }) {
  const safeMessages = Array.isArray(messages) ? messages : [];
  return (
    <div className="ai-chat-content-container">
      {safeMessages.map((msg, idx) =>
        <div key={idx} style={{ whiteSpace: 'pre-wrap', color: msg.role === 'user' ? '#333' : '#1890ff' }}>
          <b>{msg.role === 'user' ? '你：' : 'AI：'}</b> {msg.content}
        </div>
      )}
    </div>
  );
}
