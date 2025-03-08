import React from "react";
import { AiFillLinkedin } from "react-icons/ai"; // Corrected LinkedIn icon
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="Footer" className={styles.main}>
      <div className={styles.inside}>
        <h1 className={styles.title}>Contact</h1>
        <h3 className={styles.description}>Feel free to reach out!</h3>
      </div>
      <ul>
        <li className={styles.profile}>
          <FaPhoneAlt size={20} />
          <span>+91 8698975924</span>
        </li>
        <li className={styles.profile}>
          <MdOutlineEmail size={20} />
          <span>sannidhii.1609@gmail.com</span>
        </li>
        <li className={styles.profile}>
          <AiFillLinkedin size={20} />
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/username
          </a>
        </li>
        <li className={styles.profile}>
          <FaGithub size={20} />
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            github.com/username
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

