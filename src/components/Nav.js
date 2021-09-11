import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useGlobalContext} from "../context"
import {
  nav,
  svg1,
  svg2,
  navItems,
  visible,
  hide,
  hamBurger,
  cancel,
  relative,
  icon
} from "../style/styles.module.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import {purple} from  "../style/main.module.css"
const Nav = ({Link}) => {
  const {state, setState} = useGlobalContext()
  const toggelNav = (e) => {
    console.log(state);
    setState(!state);
  };
  return (<>
  
          <div className={`${hamBurger} ${!state&& visible}`} onClick={toggelNav}>
            <div className={`${icon} ${purple}`}>Valorant Pro</div>
            <BiMenuAltLeft />
          </div>
    <nav
      className={`${nav} ${state ? visible : hide}`}
      
    >
      {/* <span>Valorant Prince</span> */}
      <div className={relative}>
          <Ul state={state} {...toggelNav} Link={Link}/>
          <FirstBlob />
          <SecondBlob />
          <div className={cancel} onClick={toggelNav}>
            <FaTimes />
          </div>
      </div>
    </nav>
  </>
  );
};
const Ul = ({Link}) => {
  return (
    <ul className={navItems}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/Projects">Projects</Link>
      </li>
      <li>
        <Link to="/Blog">Blog</Link>
      </li>
    </ul>
  );
};

const FirstBlob = () => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={svg1}
  >
    <path
      fill="#8A3FFC"
      d="M46.2,-38.6C59.9,-19.7,70.9,-0.5,68.8,18.5C66.7,37.6,51.5,56.5,31.9,65.7C12.3,74.8,-11.6,74.3,-32.4,65.2C-53.2,56,-70.9,38.1,-76.7,16.4C-82.5,-5.2,-76.4,-30.7,-61.6,-49.8C-46.9,-68.9,-23.4,-81.8,-3.6,-78.9C16.3,-76,32.6,-57.5,46.2,-38.6Z"
      transform="translate(100 100)"
    />
  </svg>
  //   <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  //     <path
  //       fill="#8A3FFC"
  //       d="M65.5,-46C80.4,-33.6,84.8,-6.6,77.7,15.1C70.7,36.9,52.2,53.5,30.8,63.8C9.3,74,-15.1,78,-32.8,69.1C-50.6,60.2,-61.7,38.4,-66.9,15.3C-72.1,-7.7,-71.5,-32.1,-59.3,-43.9C-47.2,-55.6,-23.6,-54.7,0.9,-55.4C25.3,-56.1,50.6,-58.3,65.5,-46Z"
  //       transform="translate(100 100)"
  //     />
  //   </svg>
);
const SecondBlob = () => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    className={svg2}
  >
    <path
      fill="#6704fb"
      d="M46.2,-38.6C59.9,-19.7,70.9,-0.5,68.8,18.5C66.7,37.6,51.5,56.5,31.9,65.7C12.3,74.8,-11.6,74.3,-32.4,65.2C-53.2,56,-70.9,38.1,-76.7,16.4C-82.5,-5.2,-76.4,-30.7,-61.6,-49.8C-46.9,-68.9,-23.4,-81.8,-3.6,-78.9C16.3,-76,32.6,-57.5,46.2,-38.6Z"
      transform="translate(100 100)"
    />
  </svg>
);
export default Nav;
