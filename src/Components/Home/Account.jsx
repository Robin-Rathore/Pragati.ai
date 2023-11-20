import * as React from "react";
import "./Account.css";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Tooltip } from "@mui/material";
export default function FadeMenu() {

  return (
    <div className="dropdown">
      <button
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{border: "none", background:"transparent"}}
      >
        <Tooltip title="Account" classes={{ tooltip: 'custom-tooltip' }}>
          <div className="feed-back" style={{ border: 'none' }}>
            <a href="">{<AccountCircleOutlinedIcon />}</a>
          </div>
        </Tooltip>

      </button>
      <ul className="dropdown-menu" style={{backgroundColor:"transparent", color:"black",top:"20px",margin: "20px 0px"}} >
        <li className="li-hover" style={{ color:"black"}}>
          <a className="dropdown-item" href="#">
            Logout
          </a>
        </li>
        <li className="li-hover" style={{ color:"black"}}>
          <a className="dropdown-item" href="#">
            Landing Page
          </a>
        </li>
        <li className="li-hover" style={{ color:"black"}}>
          <a className="dropdown-item" href="#">
            Share
          </a>
        </li>
      </ul>
    </div>
  );
}
