import React, {useState} from 'react'
import { Eye,EyeOff,Lock,User } from 'lucide-react';
export default function TypePassword() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [showpwd,setShowpwd] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        
        alert(`账号：${username}\n密码：${password}`);
    };

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-item">
            <label>用户名<User /></label>
            <input 
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder='请输入用户名'
                autoComplete="username"
            />
                
        </div>
        <div className="form-item">
            <label>登录密码<Lock /></label>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='请输入登录密码' 
                autoComplete="current-password"
            />
            <span className='showpwdToggle' onClick={() => setShowpwd(prev => !prev)}>
                {showpwd === true? <Eye /> : <EyeOff /> }
            </span>
        </div>
        <button className='login-button' type='submit' >
            立即登录
        </button>
    </form>
    )
}