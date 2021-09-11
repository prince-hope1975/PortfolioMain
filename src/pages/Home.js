import React from "react"
import Main from "../components/intro";
import { DiReact, DiGit, DiSass } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";

import { SiWebpack, SiJavascript, SiBabel } from "react-icons/si";
import {tech, container} from "../style/main.module.css"
// import { IoLogoFirebase, IoLogoSass } from "react-icons/io";
const Home =  ()=>{
    return <>
    <Main/>
<Software />
    </>
}
const Software = () => {
    return (
      <div className={container}>
        <h2>
          Some of The Technologies i Work With
          <div className={tech}>
            <AiFillHtml5 />
            <SiJavascript />
            <DiReact />
            <DiGit />
            <DiSass />
            <SiBabel />
            <SiWebpack />
            <FaNode />
          </div>
        </h2>
      </div>
    );
}
export default Home;
