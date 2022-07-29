import React from 'react';
import styles from './header.module.css';
import { Search } from '../Search/Search';
import logo from '../../assets/beerLogo.svg';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerLogo}>
                    <img width="60" src={logo} alt="logo" />
                    <div>
                        <h1>Bears</h1>
                        <p> пей что-бы жить </p>
                    </div>
                </div>
                <Search />
            </div>
        </div>
    );
};
