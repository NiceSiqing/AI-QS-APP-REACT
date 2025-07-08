import React, {useState} from 'react'
import LoginTabs from './LoginTabs'
import TypePassword from './TypePassword';
import TypeSMS from './Typesms';



export default function LoginForm() {
  const [loginType, setLoginType] = useState('password')



  return (
  <div className="login-form">
    <LoginTabs active={loginType} onChange={setLoginType} />
    {loginType === 'password' ? (
      <TypePassword />
    ) : (
      <TypeSMS />
    )}
  </div>
  )
}
