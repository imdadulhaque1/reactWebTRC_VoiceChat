import React from 'react';
import styles from './Card.module.css';
import LogoImdad from '../../assets/images/Imdad.png';
function Card() {
    return (
        <div className={styles.card}>
                <div className={styles.headingWrapper}>
                    <img src={LogoImdad} height={40} width={70} alt="Imdadul Haque"/>
                    <h2 className={styles.heading}>Welcome to chatting room!</h2>
                </div>

            </div>
    )
}

export default Card;
