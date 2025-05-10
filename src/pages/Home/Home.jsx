import React from 'react';
import styles from './Home.module.css';
import Scene from '../../components/three/Scene.jsx';
import { Link } from 'react-router-dom';

export default function Home() {

    return(
        <div className={styles.canvasContainer}>
            <Scene />

        </div>
    )
}