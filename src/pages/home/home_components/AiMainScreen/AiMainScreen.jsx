import BailianChat from '../BailianChat/BailianChat';
import AiGuideList from "./AiGuideList/AiGuideList";
import AiHeader from "./AiHeader/AiHeader";


export default function AiMainScreen({inputValue,setInputValue, messages,setMessages}) {
    
    return (
        <main className="ai-main-screen">
            <section className="ai-main-screen-container">
                <AiHeader />
                <AiGuideList setInputValue={setInputValue} />
                <BailianChat inputValue={inputValue} setInputValue={setInputValue} messages={messages} setMessages={setMessages} />

            </section>
        </main>

    )
}