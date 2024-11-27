import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../ColorContext/darkContext';

// import sass file
import './navbar.scss';

// import images
import admin from '../../Images/admin_pic.jpg';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    // color state management using react context
    const { darkMode, dispatch } = useContext(ColorContext);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="navbar">
            <div className="navbar_main">
                <div className="menu_logo">
                    {toggle ? (
                        <CloseIcon className="menu_icon" onClick={handleToggle} />
                    ) : (
                        <MenuIcon className="menu_icon" onClick={handleToggle} />
                    )}

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h3 className="text_none">Dashboard</h3>
                    </Link>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search.." />

                    <SearchIcon className="search_icon" />
                </div>

                <div className="item_lists">
                    <div className="item item_lan">
                        <LanguageIcon className="item_icon" />
                        <p>English</p>
                    </div>
                    <div className="item">
                        {!darkMode ? (
                            <DarkModeIcon
                                className="item_icon"
                                onClick={() => dispatch({ type: 'TOGGLE' })}
                            />
                        ) : (
                            <LightModeIcon
                                className="item_icon white"
                                onClick={() => dispatch({ type: 'TOGGLE' })}
                            />
                        )}
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="item_icon" />
                    </div>

                    <div className="item">
                        <ChatBubbleOutlineIcon className="item_icon" />
                        <span className="badge">2</span>
                    </div>
                    <div className="item">
                        <NotificationsNoneIcon className="item_icon" />
                        <span className="badge">1</span>
                    </div>

                    <div className="item">
                        <img className="admin_pic" src={admin} alt="admin" />
                    </div>
                </div>
            </div>

            <div className="res_navbar">
                {toggle && (
                    <div className="res_nav_menu">
                        <div className="res_nav_menuu">
                            <div className="links">
                                <ul>
                                    <p className="spann">Main</p>
                                    <Link to="/" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <DashboardIcon className="icon" /> Dashboard
                                        </li>
                                    </Link>

                                    <p className="spann">lists</p>
                                    <Link to="/users" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <PersonIcon className="icon" /> Users
                                        </li>
                                    </Link>
                                    <Link to="/roles" style={{ textDecoration: 'none' }}>
                                        <li>
                                            <PersonIcon className="icon" /> Roles
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
