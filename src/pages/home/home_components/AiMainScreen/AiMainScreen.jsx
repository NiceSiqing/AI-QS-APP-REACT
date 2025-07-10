import AiBubblePopover from "./AiBubblePopover";
import AiChatContent from "./AiChatContent";
import AiGuideList from "./AiGuideList";
import AiHeader from "./AiHeader";
import AiInputBox from "./AiInputBox";

export default function AiMainScreen() {
    return (
        <main className="ai-main-screen">
            <section className="ai-main-screen-container">
                <AiHeader />
                <AiGuideList />
                <AiChatContent />
                <AiBubblePopover />
                <AiInputBox />
            </section>
        </main>

    )
}