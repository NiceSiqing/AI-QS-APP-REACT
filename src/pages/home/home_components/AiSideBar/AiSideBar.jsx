import YaodeLogo from "@/components/YaodeLogo";
import AiHistory from "./AiHistory";
import AiNewChat from "./AiNewChat";

export default function AiSidebar({setInputValue}) {
    return (
        <aside className="ai-sidebar">
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="logo-container">
                        <YaodeLogo  />
                    </div>
                </div>
                <AiNewChat setInputValue={setInputValue} />
                <AiHistory />
            </div>
        </aside>
    )
}