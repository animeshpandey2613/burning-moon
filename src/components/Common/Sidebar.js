import React, { useState, useRef } from "react";
import "./Sidebar.css";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import LogoImg from "../../images/Logo.png";
import { Link } from "react-router-dom";
import {
  BiSearch,
  BiTv,
  BiSolidTv,
  BiCameraMovie,
  BiSolidCameraMovie,
  BiCricketBall,
  BiSolidCricketBall,
} from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

function Sidebar() {
  const [menuOpener, setMenuOpener] = useState(false);
  const [menuItems, setMenuItems] = useState({
    Home: false,
    Search: false,
    TV: false,
    Movie: false,
    Sports: false,
    Logout: false,
  });
  const SliderRef = useRef();
  const SidebarMenuRef = useRef();
  //LEARN THIS TOGGLE CODE!!!!!!
  const toggleMenuItem = (item) => {
    setMenuItems((prevMenuItems) => ({
      ...prevMenuItems,
      [item]: !prevMenuItems[item],
    }));
  };

  const menuMouseOpener = () => {
    setMenuOpener(true);
    SliderRef.current.style.transform = `translateX(248px)`;
    SidebarMenuRef.current.style.display = "none";
  };

  const menuMouseCloser = () => {
    setMenuOpener(false);
    SliderRef.current.style.transform = `translateX(0px)`;
    SidebarMenuRef.current.style.display = "block";
  };

  const menuItemsArray = [
    {
      name: "Home",
      icon: menuItems.Home ? <AiFillHome /> : <AiOutlineHome />,
      redirect: "/user/home",
    },
    { name: "Search", icon: <BiSearch />, redirect: "/user/search" },
    {
      name: "TV",
      icon: menuItems.TV ? <BiSolidTv /> : <BiTv />,
      redirect: "/user/home",
    },
    {
      name: "Movie",
      icon: menuItems.Movie ? <BiSolidCameraMovie /> : <BiCameraMovie />,
      redirect: "/user/home",
    },
    {
      name: "Sports",
      icon: menuItems.Sports ? <BiSolidCricketBall /> : <BiCricketBall />,
      redirect: "/user/home",
    },
    {
      name: "Logout",
      icon: menuItems.Logout ? <FaUser /> : <FaRegUser />,
      redirect: "/logout",
    },
  ];

  return (
    <div className="Sidebarcontainer" onMouseEnter={menuMouseOpener}>
      <div className="Sidebarmenu" ref={SidebarMenuRef}>
        <div className="SidebarLogo">
          <img src={LogoImg} alt="asdf" />
        </div>
        <div className="SidebarGroup">
          {menuItemsArray.map((item, index) => (
            <div key={index} className="Sidebaricon">
              {menuOpener ? "" : item.icon}
            </div>
          ))}
        </div>
      </div>
      <div
        className="SidebarSlider"
        onMouseLeave={menuMouseCloser}
        ref={SliderRef}
      >
        <div className="SidebarGroup2">
          {menuItemsArray.map((item, index) => (
            <Link to={item.redirect}>
              <div
                className="Sidebarpair"
                key={index}
                onMouseEnter={() => toggleMenuItem(item.name)}
                onMouseLeave={() => toggleMenuItem(item.name)}
              >
                <div className="SidebarIconContainer">{item.icon}</div>
                <div className="SidebarText">{item.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
