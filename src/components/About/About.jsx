import React from "react";
import styles from "./about.module.css";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.heading}>About</h2>
        <div className={styles.content}>
          <img src={AboutImg} alt="About Me" className={styles.img} />
          <ul className={styles.list}>
            <li className={styles.item}>
              <IoArrowForward size={30} className={styles.icon} />
              <span>
                <h1 className={styles.title}>Frontend Developer</h1>
                <p className={styles.description}>
                  A Frontend Developer skilled in Figma, React, HTML, CSS, and
                  WordPress. I create dynamic, responsive websites with a focus
                  on seamless user interfaces and engaging designs.
                </p>
              </span>
            </li>
            <li className={styles.item}>
              <IoArrowForward size={30} className={styles.icon} />
              <span>
                <h1 className={styles.title}>Backend Developer</h1>
                <p className={styles.description}>
                  A Backend Developer skilled in Python, AI tools, and Machine
                  Learning. I build robust server-side applications and
                  integrate intelligent solutions to enhance functionality and
                  performance.
                </p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
