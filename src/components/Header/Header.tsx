import React from 'react';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logoWrapper}>
                <Logo />
                <div className={styles.textContainer}>
                    <span className={styles.logoMainText}>Security</span>
                    <span className={styles.logoSubText}>Forum</span>
                </div>
            </div>
            <nav className={styles.navigationContainer}>
                <ul>
                    <li>
                        <Link to="#" className={styles.active}>
                            о мероприятии
                        </Link>
                    </li>
                    <li>
                        <Link to="#">спикеры</Link>
                    </li>
                </ul>
            </nav>
            <button className={styles.btn}>регистрация</button>
        </header>
    );
};

export default Header;
