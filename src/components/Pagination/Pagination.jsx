import React from 'react';
import styles from './pagination.module.css';

export const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className={styles.container}>
            <div className={styles.pagination}>
                {pageNumbers.map((number, index) => (
                    <a
                        key={index}
                        onClick={() => paginate(number)}
                        // href="!#"
                        className={index + 1 === currentPage ? `${styles.active}` : ''}>
                        {number}
                    </a>
                ))}
            </div>
        </div>
    );
};
