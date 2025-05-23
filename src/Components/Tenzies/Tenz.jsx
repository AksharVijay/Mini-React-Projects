import React from 'react'
import styles from "./Tenz.module.css";
import Die from './Die';

const Tenz = () => {
  return (
    <main className={styles.main}>
        <div className={styles.tenzContainer}>
            <div className={styles.dieTenzContainer}>
                <Die/>
                <Die/>
                <Die/>
                <Die/>
                <Die/>
                <Die/>
                <Die/>
                <Die/>
                <Die/>
                <Die/>
            </div>
        </div>
        Hello
    </main>
  )
}

export default Tenz;