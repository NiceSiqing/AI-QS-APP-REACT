import React, {useState, useReducer, useEffect, useRef} from 'react'
import { Lock,User } from 'lucide-react';
import Button from '@/components/Button'
import './TypeComponents.less'

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
export default function TypeSMS({onChange}) {
    const [phone, setPhone] = useState('');                 
    const [smsCode, setSmsCode] = useState(''); 
    const [smsState, dispatch] = useReducer(smsReducer, initialSmsState);
    const timerRef = useRef(null)

    useEffect(() => {
        onChange && onChange({phone, smsCode});
    }, [phone, smsCode]);


    function startCountdown(seconds) {
        dispatch({type: 'COUNTDOWN', payload:  seconds})
        timerRef.current = setInterval(() => {
            seconds -= 1
            if(seconds > 0) {
                dispatch({type : 'COUNTDOWN', payload : seconds})
            }else {
                clearInterval(timerRef.current)
                dispatch({type: 'RESET'})
            }
        }, 1000)
    }

    function handleSendSms() {
        if(!phone) {
            alert('请输入手机号')
            return
        }
        dispatch({
            type: 'SENDING'
        })
        setTimeout(() => {
            startCountdown(60)
        },2000)
    }

    useEffect(() => {
        return () => {if(timerRef.current) clearInterval(timerRef.current)}
    }, [])

    let btnText = '发送验证码'
    let btnDisabled = false
    if(smsState.status === 'SENDING'){
        btnText = '正在发送'
        btnDisabled = true
    } else if (smsState.status === 'COUNTDOWN'){
        btnText = `${smsState.countdown} s后重发`
        btnDisabled = true
    }
    return (
    <>
        <div className="form-item">           
            <label><User />手机号码</label>
            <input 
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder='请输入手机号码'
                autoComplete="tel"
            />
        </div>
        <div className="form-item">           
            <label><Lock />验证码</label>
            <div className="input-with-sms">
                <input 
                    value={smsCode}
                    onChange={e => setSmsCode(e.target.value)}
                    placeholder='请输入6位验证码'
                />
                <Button 
                    type='button'
                    onClick={handleSendSms}
                    disabled={btnDisabled}
                    className='smsButton'
                >
                {btnText}    
                </Button>
            </div>
        </div>


    </>
    )
}