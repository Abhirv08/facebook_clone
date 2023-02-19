import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import { useState } from "react";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

export default function Navbar() {
  const [active, setActive] = useState(true);

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgb(53, 51, 51);',
      color: 'rgb(228, 227, 227);',
      boxShadow: '1px 1px 1px rgb(68, 68, 68)',
      fontSize: 12,
      padding: '10px',
      borderRadius: '10px',
    },
  }));


  return (
    <div className="navbar_container">
      <div className="first_part">
        <img src="./assets/logo.png" alt="logo" />
        <label htmlFor="search">
          <div><SearchIcon xlassName="search_icon" /></div>
          <div className="search_input_box"><input type="text" id="search" placeholder="Search Facebook " /></div>
        </label>

      </div>
      
      <div className="middle_part">
        <div></div>
        <div className="mid_icons_container">
          <Link to="/" className={active ? "active" : "inactive"} onClick={() => setActive(true)}>
            <HomeIcon sx={{ fontSize: 36 }} className="icon" onClick={() => setActive(true)} />
          </Link>
          <Link to="/friends" className={active ? "inactive" : "active"} onClick={() => setActive(false)}>
            <PeopleIcon sx={{ fontSize: 36 }} className="icon" onClick={() => setActive(false)} />
          </Link>
          <Link to="/bookmarks" className={active ? "inactive hamburger_icon" : "active hamburger_icon"} onClick={() => setActive(false)}>
            <MenuIcon sx={{ fontSize: 36 }} className="icon" onClick={() => setActive(false)} />
          </Link>
        </div>
        <div></div>
      </div>

      <div className="last_part">
        <Link to="/friends" className="find_friends">Find Friends</Link>
        <div className="menu">
          <BootstrapTooltip title="Menu" placement="bottom" ><img src="./assets/menu.png" alt="menu" /></BootstrapTooltip>
        </div>
        <div className="add">
          <BootstrapTooltip title="Create" placement="bottom" ><AddIcon /></BootstrapTooltip>
        </div>
        <div className="messenger_logo">
          <BootstrapTooltip title="Messenger" placement="bottom"><img src="./assets/messenger.png" alt="messenger logo" /></BootstrapTooltip>
        </div>
        <div className="notification_logo">
          <BootstrapTooltip title="Notifications" placement="bottom"><img src="./assets/notification.png" alt="notification" /></BootstrapTooltip>
        </div>
        <div className="profile">
          <BootstrapTooltip title="Account" placement="bottom" ><img src="./assets/person/person10.jpg" alt="account" /></BootstrapTooltip>
        </div>
      </div>

    </div>
  )
}