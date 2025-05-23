import React from 'react'
import styles from "./Die.module.css";
import DieCard from './DieCard';

const Die = () => {
  return (
    <div className={styles.dieContainer}>
        <DieCard/>
    </div>
  )
}

export default Die;