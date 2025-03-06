import React from "react";
import styles from "./home.module.css";

import TextChange from "../TextChange";


import SplineComponent from "../SplineComponent";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.inside}>
        <h1 className={styles.Name}>
          <TextChange />
        </h1>
        <p className={styles.intro}>
          "I’m a third-year engineering student specializing in Artificial
          Intelligence and Machine Learning. I also create full-stack, real-time
          AI-powered apps. This portfolio showcases my work in both frontend and
          backend projects."
        </p>
        <button className={styles.Contactbutton}>Contact Me</button>
      </div>
      <div>
        <SplineComponent />
      </div>
    </div>
  );
};

export default Home;
