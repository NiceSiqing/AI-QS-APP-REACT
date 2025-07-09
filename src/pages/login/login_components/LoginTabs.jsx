import './LoginTabs.less'
import { Smartphone,Lock } from 'lucide-react';

export default function LoginTabs({ active, onChange }) {
  return (
    <div className="login-tabs">
      <div
        className="login-tabs-slider"
        style={{
          transform: active === 'password' ? 'translateX(100%)' : 'translateX(0%)'
        }}
      />
      <div
        className={`login-tab ${active === 'sms' ? 'active' : ''}`}
        onClick={() => onChange('sms')}
      >
        <Smartphone className="tab-icon" />
        验证码登录
      </div>
      <div
        className={`login-tab ${active === 'password' ? 'active' : ''}`}
        onClick={() => onChange('password')}
      >
        <Lock className="tab-icon" />
        密码登录
      </div>
    </div>
  );
}