import React from 'react'
import styles from "./Button.module.css";

const Button = ({text}) =>{
    return (
        <button className={styles.HomeBtn} >
            <span>{text}</span>
            <img src="/images/back.png" alt="Back Icon" className={styles.BtnArraw} height={10} width={25} />
        </button>
    )
}

export default Button;
