import { useState } from "react";
import styles from "./navbar.module.css"; // Adjust path as needed
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.Title}>Portfolio</div>
      
      {/* Menu Icon for Mobile */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle icon */}
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.sections} ${isOpen ? styles.show : styles.hide}`}>
        <a href="#About">
          <li className={styles.section}>About</li>
        </a>
        <a href="#Skill">
          <li className={styles.section}>Skills</li>
        </a>
        <a href="#Project">
          <li className={styles.section}>Projects</li>
        </a>
        <a href="#Footer">
          <li className={styles.section}>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;

