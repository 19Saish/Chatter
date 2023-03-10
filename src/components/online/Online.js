import React from "react";
import "./Online.css";

function Online({user}) {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileContainer">
        <img src={PF+user.profileImage} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}

export default Online;
