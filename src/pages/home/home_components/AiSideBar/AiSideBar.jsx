import YaodeLogo from "@/components/YaodeLogo";
import AiHistory from "./AiHistory";
import AiNewChat from "./AiNewChat";

export default function AiSidebar() {
    return (
        <aside className="ai-sidebar">
            <div className="sidebar">
                <div className="sidebar-header">
                    <div className="logo-container">
                        <YaodeLogo  />
                    </div>
                </div>
                <AiNewChat />
                <AiHistory />
            </div>
        </aside>
    )
}