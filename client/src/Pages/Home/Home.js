import React, { Component } from 'react';
import Header from '../../components/Header-Footer/Header';
import backImage from '../../images/home-page-image.jpeg';
import styles from './Home.module.css';
class Home extends Component {
    render() {
        return (
            <div className={styles.Home} style={{backgroundImage:`linear-gradient(rgba(20, 41, 51 ,0.7), rgba(8, 20, 26 ,0.7)), url(${backImage})`}}>
                <Header/>
                               
            </div>
        );
    }
}

export default Home;