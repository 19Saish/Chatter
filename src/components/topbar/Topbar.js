import React, { useContext } from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


function Topbar() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const {user} = useContext(AuthContext);

  return (
    <div className="topbar_container">
      <div className="topbar_left">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo"> Chatter</span>
        </Link>
      </div>
      <div className="topbar_center">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbar_right">
        <div className="topbar_links">
          <span className="topbar_link">HomePage</span>
          <span className="topbar_link">TimeLine</span>
        </div>
        <div className="topbar_icons">
          <div className="topbar_iconItem">
            <PersonIcon />
            <span className="topbar_iconBadge">0</span>
          </div>
          <div className="topbar_iconItem">
            <ChatIcon />
            <span className="topbar_iconBadge">0</span>
          </div>
          <div className="topbar_iconItem">
            <NotificationsIcon />
            <span className="topbar_iconBadge">0</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF+user.profilePicture : PF+"noprofile.png"} alt="" className="topbar_image" />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
