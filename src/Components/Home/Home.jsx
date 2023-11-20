import React from 'react'
import Navbar from './Navbar'
import SideBarChats from './SideBarChats'
import "./Home.css"
import MainChat from './MainChat'
const Home = () => {
  return (
    <>
      <Navbar/>
        <div className="inner-chat">
        <SideBarChats/>
        <MainChat/>
        </div>
    </>
  )
}

export default Home
