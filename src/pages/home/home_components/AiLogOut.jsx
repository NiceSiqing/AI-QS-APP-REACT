import { LogOut } from 'lucide-react';
export default function AiLogOut({onClick}) {
    return (
        <button 
            className="ai-logout"
            onClick={onClick}
        >
        <LogOut/> 
        <span>退出</span>
        </button>
    )
}