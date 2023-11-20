import React from 'react'
import "./Navbar.css";
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Tooltip from '@mui/material/Tooltip';
import FadeMenu from './Account';
const Navbar = () => {
  return (
    <div className='main-header'>
      <div className="logo"><a className='logo-name' href=""><img src="./Image/logo.png" alt="" />Pragati.ai</a></div>
      <div className="icons">
        <Tooltip  title="Help">
            <div className="help"><a  href="" style={{background:"transparent"}}>{< LiveHelpOutlinedIcon/>}</a></div>
        </Tooltip>
        <Tooltip title="Feedback">
            <div className="feed-back"><a  href=""style={{background:"transparent"}}>{<FeedbackOutlinedIcon/>}</a></div>
        </Tooltip>
        <Tooltip title="Settings">
            <div className="feed-back"><a  href=""style={{background:"transparent"}}>{<SettingsOutlinedIcon/>}</a></div>
        </Tooltip>
        <div style={{background:"transparent"}}><FadeMenu/></div>
      </div>

    </div>
  );
}

export default Navbar;
