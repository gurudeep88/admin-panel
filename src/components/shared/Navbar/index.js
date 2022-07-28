import React, { useContext } from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import './index.scss';
import { DarkModeContext } from '../../../context/dark';

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search ...' />
          <SearchOutlinedIcon />
        </div>
        <div className="languages">
          <div className="language">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="language">
            <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type: "TOGGLE"})}/>
          </div>
          <div className="language">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="language">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <span className="counter">1</span>
          </div>
          <div className="language">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <span className="counter">1</span>
          </div>
          <div className="language">
            <ListOutlinedIcon className="icon"/>
          </div>
          <div className="language">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar