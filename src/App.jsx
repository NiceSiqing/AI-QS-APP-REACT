import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/login'
import Home from './pages/home/home'
import NotFound from './pages/notfound/notfound'
import { AiConfigProvider } from '@/context/AiConfigContext';
function App() {
  // 把 token 作为 state，这样 setToken 后可以刷新
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <AiConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={token ? <Navigate to="/home" /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route
            path="/home"
            element={token ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>      
    </AiConfigProvider>

  )
}

export default App

