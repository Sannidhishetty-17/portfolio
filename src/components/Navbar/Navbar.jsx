import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import styles from "./navbar.module.css"; // Adjust path as needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.Title}>Portfolio</div>
      <ul
        className={`${styles.sections} ${menuOpen ? styles.show : styles.hide}`}
      >
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

      <button
        className={styles.menuIcon}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        {menuOpen ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;
