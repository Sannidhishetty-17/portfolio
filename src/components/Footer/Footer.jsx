import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./Footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className={styles.main}>
      <div className={styles.inside}>
        <h1 className={styles.title}>Contact</h1>
        <h3 className={styles.description}>Feel Free to reach out!</h3>
      </div>
      <ul>
        <li className={styles.profile}>
          <FaPhoneAlt size={20} />
          +91 8698975924
        </li>
        <li className={styles.profile}>
          <MdOutlineEmail size={20} />
          sannidhii.1609@gmail.com
        </li>
        <li className={styles.profile}>
          <CiLinkedin size={20} />
          linkedin.com/username
        </li>
        <li className={styles.profile}>
          <FaGithub size={20} />
          github.com/username
        </li>
      </ul>
    </div>
  );
};

export default Footer;
