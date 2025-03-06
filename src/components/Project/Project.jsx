import React from "react";
import styles from "./project.module.css";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div id="Project" className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.grid}>
        <ProjectCard
          title="Portfolio Website"
          main="A portfolio website showcasing my work and skills."
        />
        <ProjectCard
          title="Translator"
          main="A Translator using library such as Google's Speech Recognition."
        />
        <ProjectCard
          title="Face Emotion Recognition"
          main="An Application that determine emotions like sad, happiness, disgust, anger, surprise and fear."
        />
        <ProjectCard
          title="Skin Disease Detection"
          main="An Skin disease detection application that detects the skin infection."
        />
        <ProjectCard
          title="Dashboard"
          main="A  React Dashboard with framer-motion animation, dynamic items etc."
        />
        <ProjectCard
          title="TodoApp"
          main="A React TodoApp that helps to manage the tasks. "
        />
        <ProjectCard
          title="FoodApp"
          main="A React app that discover recipes with details."
        />
      </div>
    </div>
  );
};

export default Project;
