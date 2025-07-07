import React, {useEffect} from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = '页面不存在 - 药德'
  }, [])
  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h2>404 Not Found</h2>
      <p>你访问的页面不存在</p>
    </div>
  )
}
