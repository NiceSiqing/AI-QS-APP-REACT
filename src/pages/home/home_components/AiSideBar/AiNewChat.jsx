import { NotebookPen } from 'lucide-react';

export default function AiNewChat({setInputValue, setMessages}) {

    return (
        <div 
            className='sidebar-logo_info-container'
            onClick={() => (setInputValue(''),setMessages([]))}
        >
            <NotebookPen />
            <span >新的对话</span>
        </div>
    )
}