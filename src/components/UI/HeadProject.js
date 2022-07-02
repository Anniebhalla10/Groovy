import { Button } from "antd";
import { AiFillHeart, AiFillHome, AiFillSetting } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeadProject = () => {
  const navigate = useNavigate();
  const [greet, setGreet] = useState("");

  const getGreet = () => {
    var time = new Date().getHours();
    if (time >= 4 && time < 12) {
      setGreet("Morning");
    } else if (time >= 12 && time < 17) {
      setGreet("Afternoon");
    } else if (time >= 17 || time < 4) {
      setGreet("Night");
    }
  };

  useEffect(() => {
    getGreet();
    setInterval(() => {
      getGreet();
    }, 30000);
  }, []);

  return (
    <>
      <div className="headproject">
        <div className="sidebar">
          <div className="sidebar-menu" onClick={() => navigate("/home")}>
            <Button
              icon={<AiFillHome style={{ fontSize: '25px' }} />}
              className="sidebar-btn"
              />
            <label>Home</label>
          </div>
          <div className="sidebar-menu"  onClick={() => navigate("/home/favourites")}>
            <Button
              icon={<AiFillHeart style={{ fontSize: '25px' }} />}
              className="sidebar-btn"
            />
            <label>Favourites</label>
          </div>
          <div className="sidebar-menu">
            <Button icon={<AiFillSetting style={{ fontSize: '25px' }} />} className="sidebar-btn" />
            <label>Settings</label>
          </div>
        </div>
      </div>

      <div className="headbar">
        <b>GROOVY</b>MUSIC
        <div className="headbar-greeting">Good {greet}</div>
      </div>
    </>
  );
};

export default HeadProject;
