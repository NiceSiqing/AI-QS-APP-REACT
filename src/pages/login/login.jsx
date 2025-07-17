import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'   
import { login } from '@/api/auth'
import LoginPage from './login_components/LoginPage'
import  './login.less'

export default function Login({ setToken }) {
    const navigate = useNavigate();
    useEffect(()=> {
        document.title = '登录 - 药德'
    }, [])  
    const handleLogin = async (formData) => {
        try {
            
            const data = await login(formData); // formData {username, password, ...}
            console.log('登录接口返回:', data)
            // 假如登录成功返回 token
            localStorage.setItem('token', data.access_token);
            setToken(data.access_token);
            // 跳转
            navigate('/home');
        } catch (err) {
            alert(err?.response?.data?.msg || err?.message || '登录失败');
        }
    }


  return (
    <main className='login-main'>
        {/*左边介绍部分  */}
        <div className="login-page_intro">
            <div className="intro-header">
                <h1 className="intro-header_title">药德 | YAOUD</h1>
            </div>
            <h2 className="login-slogan">数字化医药行业<br />
                <span>创新解决方案</span>
            </h2>
            <div className="login-desc-card">
                <p>
                    “药德致力于通过数字化平台及专业化服务，为客户提供一站式、一体化、全链条、全服务周期的云原生all-in-one式的医药行业数字化解决方案。”
                </p>
            </div>
            <ul className="login-feature-list">
                <li>云原生架构设计</li>
                <li>全链条服务支持</li>
                <li>专业化解决方案</li>
            </ul>
            <div className="login-data-bar">
                <div className="login-data-item">
                    <span className="data-item_main">500+</span><br />
                    <span className="data-item_desc">合作企业</span>
                </div>
                <div className="login-data-item">
                    <span className="data-item_main">99.9%</span><br />
                    <span className="data-item_desc">系统稳定性</span>
                </div>
                <div className="login-data-item">
                    <span className="data-item_main">24/7</span><br />
                    <span className="data-item_desc">技术支持</span>
                </div>
            </div>


        </div>
        
        
        {/* 右边表格部分 */}
        <div className="login-page_form">
            <div className="login-area" >
                <LoginPage onLogin={handleLogin} />
            </div>
            <div className="login-page-form_footer">
                <div className="footer-links">
                    <span>服务条款 |</span>
                    <span> 隐私条款 |</span>
                    <span> 帮助中心</span>
                </div>
                <span>© 2021-2024 华强科技有限公司版权所有 备案编号：0512-68678768 苏ICP备</span>
                <span>2021034320号-1</span>
            </div>

        </div>

    </main>

  )
}
