import { ClipboardList } from 'lucide-react';
export default function AiGuideList() {
    return (
    <div className="ai-guidelist-container">
        <div className="guidelist-title">
            <ClipboardList /> <span>操作手册 &gt;</span>
        </div>
        <div className="guidelist-topitems">
            <div className="guidelist-item">如何入库</div>
            <div className="guidelist-item">如何新建商品</div>
            <div className="guidelist-item">如何使用盘点功能</div>
            <div className="guidelist-item">如何使用促销功能</div>
            <div className="guidelist-item">采购退货单如何使用</div>
        </div>
    </div>)
}