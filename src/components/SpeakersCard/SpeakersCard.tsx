import React from 'react';
import {Link} from 'react-router-dom';
import {ISpeakers} from 'redux/types';
import styles from './SpeakersCard.module.scss'

const SpeakersCard: React.FC<{ speaker: ISpeakers }> = ({speaker}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src={speaker.photo_url} alt={speaker.name}/>
            </div>
            <p className={styles.name}>{speaker.name}</p>
            <p className={styles.description}>{speaker.description}</p>
            <div className={styles.navigation}>
                <Link to='#'>Подробнее</Link>

            </div>
        </div>
    )
}

export default SpeakersCard
