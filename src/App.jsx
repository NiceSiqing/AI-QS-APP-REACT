// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/home/home'
import NotFound from './pages/notfound/notfound'

function App() {
  // 判断本地是否有 token，用于做未登录的路由保护
  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      <Routes>
        {/* 默认根路由，已登录就跳首页，未登录跳登录页 */}
        <Route
          path="/"
          element={token ? <Navigate to="/home" /> : <Navigate to="/login" />}
        />
        {/* 登录页 */}
        <Route path="/login" element={<Login />} />
        {/* 首页：加一层路由守卫，未登录不能访问 */}
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

