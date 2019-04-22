import React, { Component } from 'react';
import Header from '../../components/Header-Footer/Header';
import backImage from '../../images/home-page-image.jpeg';
import styles from './Home.module.css';
import AuthorImage from '../../components/Author/Author';
import SocialMediaIcons from '../../components/SocialMediaIcon/SocialMediaIcon'
class Home extends Component {
    render() {
        return (
            <div className={styles.Home} style={{backgroundImage:`linear-gradient(rgba(20, 41, 51 ,0.7), rgba(8, 20, 26 ,0.7)), url(${backImage})`}}>
                <Header/>
                <div className={styles.author_details}>
                    <AuthorImage height='150px' width='150px'/> 
                    <p>Hello, I am <span>Ambika Kulanthasamy</span> and</p>
                    <h1>I AM A FULL-STACK DEVELOPER</h1>
                    <p>HTML <span>~</span> CSS <span>~</span> JavaScript <span>~</span> React <span>~</span> Redux <span>~</span> Node <span>~</span> Express <span>~</span> MongoDB</p>
                    <SocialMediaIcons sidebar={false}/>
                </div>                           
            </div>
        );
    }
}

export default Home;