import { ClipboardList } from 'lucide-react';
import './AiGuideList.less'
import { helpList } from '../helpList';
export default function AiGuideList({setInputValue}) {
    return (
    <div className="ai-guidelist-container">
        <div className="guidelist-title">
            <ClipboardList size={24} /> 
            <span>操作手册 
                <span className="arrow">&gt;</span>
            </span>
        </div>
        <div className="guidelist-topitems">
            {helpList.slice(0,5).map((item, idx) =>
                (<div className="guidelist-item" key = {idx} onClick={() => setInputValue(item.desc)}>{item.title}</div>))}
            
        </div>
    </div>)
}