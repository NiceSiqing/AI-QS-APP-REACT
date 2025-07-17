import React, {useState, useEffect} from 'react'
import { Eye,EyeOff,Lock,User } from 'lucide-react';
import './TypeComponents.less'
export default function TypePassword({onChange}) {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('eoSE8Hs2hy8=')
    const [showpwd,setShowpwd] = useState(false)

      useEffect(() => {
        onChange && onChange({username, password});
    }, [username, password]);

    return (
    <>
        <div className="form-item">
            <label><User />用户名</label>
            <input 
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder='请输入用户名'
                autoComplete="username"
            />
                
        </div>
        <div className="form-item">
            <label><Lock />登录密码</label>
            <div className="input-with-icon">
                <input
                    type= {showpwd ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='请输入登录密码' 
                    autoComplete="current-password"
                />
                <span className='showpwdToggle' onClick={() => setShowpwd(prev => !prev)}>
                    {showpwd === true? <Eye /> : <EyeOff /> }
                </span>
            </div>
                
        </div>

    </>
    )
}