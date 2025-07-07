// src/pages/home/home.jsx
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  useEffect(() => {
    document.title = '首页 - AI助手'
  }, [])
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div>
      <h2>欢迎来到AI问答首页</h2>
      <button onClick={handleLogout}>退出登录</button>
      {/* 这里写AI问答相关内容 */}
    </div>
  )
}
