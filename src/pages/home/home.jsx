// src/pages/home/home.jsx
import React, {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import AiSidebar from './home_components/AiSideBar/AiSideBar'
import AiLogOut from './home_components/AiLogOut'
import AiMainScreen from './home_components/AiMainScreen/AiMainScreen'
import './home.less'

export default function Home() {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = '首页 -  AI助手'
  }, [])
  
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  return (
    <main className='home-main'>
      <AiSidebar setInputValue={setInputValue} setMessages={setMessages} />
      <AiMainScreen inputValue={inputValue} setInputValue={setInputValue} messges={messages} setMessages={setMessages} />
      <AiLogOut onClick={handleLogout} />
    </main>
  )
}
