import React from "react";
import { FaCss3, FaHtml5, FaJs, FaFigma } from "react-icons/fa"; // Fixed import
import { SiWebflow, SiPython, SiMysql, SiCanva, SiAutocad, SiWordpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { AiFillFileExcel, AiFillFileWord } from "react-icons/ai";
import styles from "./skill.module.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={50} color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3 size={50} color="#1572B6" /> },
  { name: "JavaScript (Basics)", icon: <FaJs size={50} color="#F7DF1E" /> },
  { name: "React", icon: <RiReactjsFill size={50} color="#61DAFB" /> },
  { name: "Webflow", icon: <SiWebflow size={50} color="#4353FF" /> },
  { name: "Figma", icon: <FaFigma size={50} color="#A259FF" /> },
  { name: "Canva", icon: <SiCanva size={50} color="#00C4CC" /> },
  { name: "WordPress", icon: <SiWordpress size={50} color="#21759B" /> },
  { name: "AutoCAD", icon: <SiAutocad size={50} color="#E11D25" /> },
  { name: "Python (Basics)", icon: <SiPython size={50} color="#3776AB" /> },
  { name: "MySQL", icon: <SiMysql size={50} color="#4479A1" /> },
  { name: "MS Excel", icon: <AiFillFileExcel size={50} color="#217346" /> },
  { name: "MS Word", icon: <AiFillFileWord size={50} color="#2B579A" /> },
];

const Skill = () => {
  return (
    <div id="Skill" className={styles.container}>
      <h2 className={styles.heading}>Technical Skills</h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.card} aria-label={skill.name}>
            {skill.icon}
            <h3 className={styles.skillName}>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
