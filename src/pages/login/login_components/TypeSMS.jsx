import React, {useState, useReducer} from 'react'
import { Lock,User } from 'lucide-react';
import Button from '@/components/Button'


const initialSmsState = { status: 'idle', countdown: 0 };
function smsReducer(state, action) {
    switch (action.type) {
        case 'SENDING':
        return { status: 'sending', countdown: 0 };
        case 'COUNTDOWN':
        return { status: 'countdown', countdown: action.payload };
        case 'RESET':
        return { status: 'idle', countdown: 0 };
        default:
        return state;
    }
}
export default function TypeSMS() {
    const [phone, setPhone] = useState('');                 
    const [smsCode, setSmsCode] = useState(''); 
    const [smsState, dispatch] = useReducer(smsReducer, initialSmsState);


    const handleSubmit = e => {
        e.preventDefault();
        
        alert(`手机号：${phone}\n验证码：${smsCode}`);
    };

    function handleSendSms() {
        if(!phone) {
            alert('请输入手机号')
            return
        }
        
    }
    return (
    <form onSubmit={handleSubmit}>
        <div className="form-item">           
            <label>手机号码<User /></label>
            <input 
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder='请输入手机号码'
                autoComplete="tel"
            />
        </div>
        <div className="form-item">           
            <label>验证码<Lock /></label>
            <input 
                value={smsCode}
                onChange={e => setSmsCode(e.target.value)}
                placeholder='请输入6位验证码'
            />
            <Button 
                type='button'
                onClick={handleSendSms}
                
            >
                
            </Button>
        </div>

    </form>
    )
}