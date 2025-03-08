
import styles from "./navbar.module.css"; // Adjust path as needed

const Navbar = () => {

  return (
    <nav className={styles.nav}>
      <div className={styles.Title}>Portfolio</div>
      <ul
        className={styles.sections}
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
    </nav>
  );
};

export default Navbar;

