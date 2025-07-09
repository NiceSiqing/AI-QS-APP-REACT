import React from 'react'
import "./LoginOptionRow.less";
export default function LoginOptionRow({checked, onChange, forgotPasswordUrl = '/forgot-password'}) {
    return (
        <div className="login-option-row">
            <label className="login-checkbox-label">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="login-checkbox"
                />
                记住登录状态
            </label>
            <a
                href={forgotPasswordUrl}
                className="login-forgot-link"
                tabIndex={0}
            >
                忘记密码?
            </a>
        </div>
    

    )
}