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
          <Button
            icon={<AiFillHome />}
            className="sidebar-btn"
            onClick={() => navigate("/home")}
          />
          <Button
            icon={<AiFillHeart />}
            className="sidebar-btn"
            onClick={() => navigate("/home/favourites")}
          />
          <Button icon={<AiFillSetting />} className="sidebar-btn" />
        </div>
      </div>

      <div className="headbar">
        <div className="headbar-greeting">Good {greet}</div>
      </div>
    </>
  );
};

export default HeadProject;
