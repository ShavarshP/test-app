import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { SpeakersCard } from 'components/SpeakersCard';
import { getSpeakersData } from 'redux/actions/speakersActions';
import { RootState } from 'redux/reducers/rootReducer';
import Header from 'components/Header';
import styles from './MainLayout.module.scss';
import Footer from 'components/Footer';

function Main() {
    const dispatch = useDispatch();

    const { pending, speakersData, error } = useSelector((state: RootState) => state.speakers);

    useQuery('invoices', () => {
        dispatch(getSpeakersData());
    });

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.backgroundPicture}>
                <div className={styles.mainContent}>
                    <div className={styles.textContent}>
                        <h1 className={styles.mainTitle}>Форум Microsoft</h1>
                        <h2 className={styles.subTitle}>«Finance industry trust in AI and IT-Security»</h2>
                        <p className={styles.mainText}>
                            Масштабная кибератака и устаревшее оборудование может привести к потере клиентов, ухудшить
                            отношения с партнёрами и учредителями, а невыполнение требований законодательства может
                            привести к существенным штрафам и даже к блокировке ресурсов
                        </p>
                        <p className={styles.subtext}>Узнайте как этого избежать, регистрируйтесь на наш форум</p>
                        <button className={styles.btn}>регистрация</button>
                    </div>
                    <div className={styles.membersWrapper}>
                        <h2 className={styles.speakerTitle}>Спикеры нашего форума</h2>
                        {pending ? (
                            <div>Loading...</div>
                        ) : error ? (
                            <div>Error</div>
                        ) : (
                            <div className={styles.cardsWrapper}>
                                {speakersData.map((speaker) => (
                                    <SpeakersCard key={speaker.photo_url} speaker={speaker} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Main;
