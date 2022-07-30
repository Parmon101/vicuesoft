import React from 'react';
import { Link } from 'react-router-dom';
import { CustomLink } from '../../helper/CustomLink';
import styles from './card.module.css';

export const Card = ({ posts, loading }) => {
    const truncate = (input) => (input.length > 140 ? `${input.substring(0, 140)}...` : input);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <CustomLink to={`/product/${post.id}`}>
                    <div key={post.id} className={styles.card}>
                        <picture className={styles.thumbnail}>
                            <img
                                className={styles.itemImg}
                                src={post.image_url}
                                width="60"
                                alt="beer"
                            />
                        </picture>
                        <div className={styles.card_content}>
                            <h2>{post.name}</h2>
                            <p>{truncate(post.description)}</p>
                        </div>
                    </div>
                </CustomLink>
            ))}
        </div>
    );
};
