import React from 'react';
import { ReactComponent as Logo } from 'assets/svg/logo.svg';
import { ReactComponent as Instagram } from 'assets/svg/instagram.svg';
import { ReactComponent as Facebook } from 'assets/svg/fb.svg';
import { ReactComponent as Telegram } from 'assets/svg/telegram.svg';
import { ReactComponent as Vkontakte } from 'assets/svg/vk.svg';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.mainContent}>
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Logo />
                    <div className={styles.textContainer}>
                        <span className={styles.logoMainText}>Security</span>
                        <span className={styles.logoSubText}>Forum</span>
                    </div>
                </div>
                <div className={styles.information}>
                    <li>Политика конфиденциальности</li>
                    <li>Публичная</li>
                    <li>+7 912 123-45-67</li>
                    <li>about@microsoftforum.com</li>
                </div>
                <div className={styles.about}>
                    <li>о мероприятии</li>
                    <li>темы</li>
                    <li>расписание</li>
                    <li>спикеры</li>
                    <li>контакты</li>
                </div>
                <div className={styles.socialIconsWrapper}>
                    <div className={styles.icon}>
                        <Vkontakte />
                    </div>
                    <div className={styles.icon}>
                        <Facebook />
                    </div>
                    <div className={styles.icon}>
                        <Instagram />
                    </div>
                    <div className={styles.icon}>
                        <Telegram />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
