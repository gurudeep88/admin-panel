import React, { useContext } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import './index.scss';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../../context/dark';

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="logo">Gurudeep</span>
        </Link>
      </div>
        <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
            <PersonOutlineOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <Inventory2OutlinedIcon className="icon"/>
            <span>Products</span>
          </li>
          </Link>
          <li>
            <BackpackOutlinedIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <DeliveryDiningOutlinedIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsOutlinedIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=>dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={()=>dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar