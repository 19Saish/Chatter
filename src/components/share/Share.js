import React, { useContext, useState, useRef } from "react";
import "./Share.css";
import MmsIcon from "@mui/icons-material/Mms";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CancelIcon from '@mui/icons-material/Cancel';
import { AuthContext } from "../../context/AuthContext";
import axios from 'axios';

function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
        userId : user._id,
        desc: desc.current.value
    }
    if(file){
      const data = new FormData();
      const fileName = Date.now() +file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
        await axios.post("/posts", newPost)
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noprofile.png"
            }
            alt=""
            className="shareProfileImage"
          />
          <input
            type="text"
            ref={desc}
            placeholder={"What is in your mind " + user.username + "?"}
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon className='shareCancelImg' onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <MmsIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptiontext">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <LabelIcon htmlColor="Black" className="shareIcon" />
              <span className="shareOptiontext">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptiontext">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="#f1c27d" className="shareIcon" />
              <span className="shareOptiontext">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}

export default Share;
