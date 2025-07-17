import './AiInputBox.less'
import React from 'react'

import Button from '@/components/Button'
import { SendHorizontal } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';
export default function AiInputBox({ inputValue, setInputValue,onSend, loading }) {




    return (
        <section className="ai-input-box-container">

            <form className='ai-input-form'>
                <div className='ai-input-box-inner'>
                    <TextareaAutosize 
                        minRows={1}
                        maxRows={6}
                        placeholder="给智能客服发消息吧~"
                        className="ai-input-box-content"
                        value={inputValue}
                        onChange = {e=> setInputValue(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onSend(); } }}
                        disabled={loading}

                    />

                    <div className="ai-input-box-toolbar">
                        <Button 
                            type="submit" 
                            className="ai-input-submit-btn" 
                            onClick={onSend}
                            disabled={loading || !inputValue.trim()}
                        >
                            <SendHorizontal size={28} />
                        </Button>
                    </div>
                </div>

            </form>
        </section>
    )
}