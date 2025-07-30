import React from "react";
import styles from "./Navbar.module.css";
import day from "../../assets/navbar/day.png";
import night from "../../assets/navbar/night.png";
import searchB from "../../assets/navbar/search-b.png";
import searchW from "../../assets/navbar/search-w.png";

const Navbar = ({theme, setTheme}) => {

    const toggleHandler = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div>
      <nav className={`${styles.nav} ${theme  === 'light' ? styles.navLight : styles.navDark}`}>
        <h2>NavBAR</h2>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Features</li>
          <li>About</li>
        </ul>
        <div className={`${styles.searchBox} ${theme === 'light' ? styles.searchBoxLight : styles.searchBoxDark}`}>
          <input type="text" placeholder="search"></input>
          <img src={searchW} />
        </div>
        <div className={styles.toggle}>
          <img onClick={() => toggleHandler()} src={theme == 'light' ? night : day} className={styles.toggleIcon} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
