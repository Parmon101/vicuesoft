import React from 'react';
import styles from './card.module.css';

export const Card = ({ name, description, image_url }) => {
    const truncate = (input) => (input.length > 140 ? `${input.substring(0, 140)}...` : input);

    return (
        <div>
            <div className={styles.card}>
                {/* <article className={styles.card}> */}
                <picture className={styles.thumbnail}>
                    <img className={styles.itemImg} src={image_url} width="60" alt="beer" />
                </picture>
                <div className={styles.card_content}>
                    <h2>{name}</h2>
                    <p>{truncate(description)}</p>
                </div>
                {/* </article> */}
            </div>
        </div>
    );
};
