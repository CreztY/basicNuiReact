import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const RootComponent = () => {
  const [visible, setVisible] = useState(false)

  const handleNuiCallback = (event) => {
    switch (event.data.action) {
      case 'open':
        setVisible(true);
        break;
    }
  }

  const keyHandler = (e) => {
    if ('Escape'.includes(e.code)) {
      setVisible(false)
      fetch(`https://${GetParentResourceName()}/hide`, {
        method: 'post'
      })
    }
  }

  useEffect(() => {
    if (visible) {
      document.body.style.display = 'flex'
    }else{
      document.body.style.display = 'none'
    }
  }, [visible])
  
  window.addEventListener('message', handleNuiCallback)
  window.addEventListener('keydown', keyHandler)
  
  return (
    <React.StrictMode>
      {visible && <App />}
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />)