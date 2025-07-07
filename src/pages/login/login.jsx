import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'   // 用于跳转
import { login } from '../../api/auth'
import  './login.less'

export default function Login() {
  useEffect(()=> {
    document.title = '登录 - 药德'
  }, [])  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()   // 获取路由跳转函数

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ username, password })
      // 假设后端返回 access_token 字段
      localStorage.setItem('token', res.access_token)
      // 跳转到首页
      navigate('/home')
    } catch (err) {
      alert('登录失败，请检查用户名和密码')
      console.log('登录失败详细信息：',err.message)
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
                    <span className="data-item__main">500+</span>
                    <span className="data-item__desc">合作企业</span>
                </div>
                <div className="login-data-item">
                    <span className="data-item__main">99.9%</span>
                    <span className="data-item__desc">系统稳定性</span>
                </div>
                <div className="login-data-item">
                    <span className="data-item__main">24/7</span>
                    <span className="data-item__desc">技术支持</span>
                </div>
            </div>


        </div>
        
        
        {/* 右边表格部分 */}
        <div className="login-page_form">
            <form className="login-form" onSubmit={handleSubmit}>
            <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="用户名"
            />
            <input
                value={password}
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="密码"
            />
            <button type="submit">登录</button>
            </form>
            </div>

    </main>

  )
}
