import React from 'react';
import styles from './Card.module.css';

const Card = ({title, icon}) => {
    return (
        <div className={styles.card}>
                <div className={styles.headingWrapper}>
                    <img src={`/images/${icon}.png`} height={40} width={70} alt="Imdadul Haque"/>
                    <h2 className={styles.heading}>{title}</h2>
                </div>

            </div>
    )
}

export default Card;
