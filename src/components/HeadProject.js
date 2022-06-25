import { Button } from "antd";
import { AiFillHeart, AiFillHome, AiFillSetting } from "react-icons/ai";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeadProject = () => {
    const navigate= useNavigate();
  return (
    <>
    <div className="headproject">
      <div className="sidebar">
        <Button icon={<AiFillHome />} className="sidebar-btn" onClick={()=>navigate('/home')}/>
        <Button icon={<AiFillHeart />} className="sidebar-btn" onClick={()=> navigate('/home/favourites')}/>
        <Button icon={<AiFillSetting/>} className="sidebar-btn" />
      </div>

      <div className="headbar">

      </div>
      </div>
    </>
  );
};

export default HeadProject;
