import React from 'react';
import html from '../../images/html.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import bootstrap from '../../images/bootstrap.png';
import react from '../../images/react.png';
import redux from '../../images/redux.png';
import node from '../../images/node.png';
import express from '../../images/express.png';
import npm from '../../images/npm.png';
import mongodb from '../../images/mongodb.png';
import mysql from '../../images/mysql.png';
import google_cloud from '../../images/google-cloud.png';
import heroku from '../../images/heroku.png';
import styles from './technologies.module.css';
import Zoom from 'react-reveal/Zoom';
const Technologies= () => {
    return (
        <Zoom duration={2000}>
            <p>My skills include but are not limited to:</p>
            <h5>Front-End:</h5>            
            <div className={styles.logos}>
                <img src = {html} alt = 'html' className={styles.image}/>
                <img src = {css} alt = 'css' className={styles.image}/>
                <img src = {js} alt = 'js' className={styles.image}/>
                <img src = {bootstrap} alt = 'bootstrap' className={styles.image}/>
                <img src = {react} alt = 'react' className={styles.image}/>
                <img src = {redux} alt = 'redux' className={styles.image}/>
            </div>
            
            <h5>Server:</h5>
            <div className={styles.logos}>
                <img src = {node} alt = 'node' className={styles.image}/>
                <img src = {express} alt = 'express' className={styles.image}/>
                <img src = {npm} alt = 'npm' className={styles.image} style={{paddingTop:'30px'}}/>
            </div>
            <h5>Databases:</h5>
            <div className={styles.logos}>
                <img src = {mongodb} alt = 'mongodb' className={styles.image}/>
                <img src = {mysql} alt = 'mysql' className={styles.image}/>
            </div>
            <h5>Cloud:</h5>
            <div className={styles.logos}>
                <img src = {heroku} alt = 'heroku' className={styles.image}/>
                <img src = {google_cloud} alt = 'google_cloud' className={styles.image}/>
            </div>
        </Zoom>
    );
};

export default Technologies;