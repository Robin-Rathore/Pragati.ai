import 'regenerator-runtime' 
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home/Home'
import Navbar from './Components/Home/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <video autoPlay loop muted playsInline className='video' src="./Image/space.mp4">
      </video>
    <Home/>
    </>
  )
}

export default App
