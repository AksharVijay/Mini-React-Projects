import React, { useState } from 'react'
import Navbar from './Navbar';
import styles from "./Navbar.module.css";

const Nav = () => {

    const [theme, setTheme] = useState('light');
  return (
    <div><Navbar theme={theme} setTheme={setTheme}/></div>
  )
}

export default Nav;