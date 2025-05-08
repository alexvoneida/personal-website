import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <h1 className={styles.title}>Hello, Home</h1>
    )
}