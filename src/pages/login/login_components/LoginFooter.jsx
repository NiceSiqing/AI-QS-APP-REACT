import React from 'react'
import { MoveRight } from 'lucide-react';

export default function LoginFooter() {
  return (
    <div className='login-footer'>
      <span>还没有账号？</span>
      <label className='login-footer-label'>
        <a href="">立即注册</a> 
        <MoveRight className='login-footer-icon' />
      </label>
      
    </div>
  )
}
