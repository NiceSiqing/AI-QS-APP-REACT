import React, {useState} from 'react'
import LoginTabs from './LoginTabs'
import TypePassword from './TypePassword';
import TypeSMS from './Typesms';
import LoginOptionRow from './LoginOptionRow';
import AgreementCheckbox from './AgreementCheckbox';



export default function LoginForm({onLogin}) {
  const [loginType, setLoginType] = useState('password')
  const [rememberMe, setRememberMe] = useState(false)
  const [agree, setAgree] = useState(false);
  const [smsForm, setSmsForm] = useState({});
  const [pwdForm, setPwdForm] = useState({});

  const handleLogin = (event, formData) => {
    event.preventDefault();
    if (!agree) {
      alert('请先同意《用户服务协议》和《隐私保护政策》');
      return;
    }
    if (onLogin) {
      onLogin(loginType === 'password' ? pwdForm : smsForm, loginType, rememberMe)
    }
  };


  return (
  <div className="login-form">
    <LoginTabs active={loginType} onChange={setLoginType} />
    <form
      onSubmit={e => {
        if (loginType === 'password') {
          handleLogin(e, pwdForm);
        } else {
          handleLogin(e, smsForm);
        }
      }}>

    </form>
    {loginType === 'password' ? (
      <TypePassword onChange={setPwdForm} />
    ) : (
      <TypeSMS onChange={setSmsForm} />
    )}
    <LoginOptionRow 
      checked={rememberMe} 
      onChange={() => setRememberMe(prev => !prev)} 
      forgotPasswordUrl="/forgot-password" />
    <AgreementCheckbox 
      checked={agree}  
      onChange={() => setAgree(prev => !prev)}
      tosUrl="/user-agreement"
      privacyUrl="/privacy-policy" />
    <button className="login-button" type="submit">
        立即登录
    </button>
  </div>
  )
}
