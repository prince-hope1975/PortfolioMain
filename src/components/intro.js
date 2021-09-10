import React from "react";
import "animate.css";
import { intro, main, markup, purple , button} from "../style/main.module.css";

const Intro = () => {
  return (
    <div className={main}>
      <div className={`animate__animated animate__bounce ${intro}`}></div>
      <div className={`${markup} animate__animated animate__rubberBand`}>
        <h1>Prince Amachree</h1>

        <div
          dangerouslySetInnerHTML={{ __html: "<'Software Engineer' />" }}
        ></div>
        <p>Hi, I'm Prince.</p>
        <p>
          I'm a Performacne driven web and mobile developer with over Two years
          of Experience in utilizing Web Technologies
        </p>
        <p>
          I currently build with the <span className={purple}>MERN</span> Stack
          (Mongo, Express, <span className={purple}>React</span>, Node js ) for
          websites and webapps. <span className={purple}>React Native </span>for
          cross platform Apps. I am thouroughly vested in building scalable
          Products for People, brands and businesses.
        </p>
        <p>I am here to help you achieve your goals ✨️✨️</p>
      </div>
      <div className={`${button}`} ><a href="https://wa.me/08104485746">Hire Me</a> </div>
    </div>
  );
};

export default Intro;
