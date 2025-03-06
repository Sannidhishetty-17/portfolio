import React from "react";
import styles from "./projectcard.module.css";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main }) => {
  return (
    <div className={styles.card}>
      <img src={bannerImg} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{main}</p>
      <div className={styles.buttons}>
        <button className={styles.button}>Demo</button>
        <button className={styles.button}>Source Code</button>
      </div>
    </div>
  );
};

export default ProjectCard;
