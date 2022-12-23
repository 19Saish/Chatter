import React from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import SideBar from "../../components/sidebar/SideBar";
import Topbar from "../../components/topbar/Topbar";
import './Home.css';

function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
