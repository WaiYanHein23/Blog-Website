import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navar from './components/Navar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
   <>
     <div>
     <Navar />
    </div>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default App
