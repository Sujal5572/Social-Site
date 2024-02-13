import "./navbar.scss"

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
// import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>LikeLaunch</span>
                </Link>
                <CottageOutlinedIcon />
                {darkMode ? (<WbSunnyOutlinedIcon onClick={toggle} />
                ) : (<DarkModeOutlinedIcon onClick={toggle} />)}
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="right">
                <PersonOutlineOutlinedIcon />
                <SendOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img
                        src={currentUser.profilePic}
                        alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar