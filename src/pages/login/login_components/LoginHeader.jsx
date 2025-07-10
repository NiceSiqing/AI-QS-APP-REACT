import YaodeLogo  from '@/components/YaodeLogo'
export default function LoginHeader() {
    return (
        <div className="login-form-header">
            <YaodeLogo className="yaodelogo" />
            <h2 className="login-form-header-h2">欢迎回来</h2>
            <p>登录您的账户以继续使用服务</p>
        </div>
    )
}