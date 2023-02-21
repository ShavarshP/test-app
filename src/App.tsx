import React from 'react';
import { Main } from 'pages/Main';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <Main />
        </div>
    );
};

export default App;
