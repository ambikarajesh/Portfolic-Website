import React, { Component } from 'react';
import Header from '../../components/Header-Footer/Header';
import backImage from '../../images/home-page-image.jpeg';
import styles from './Home.module.css';
import AuthorImage from '../../components/Author/Author';
import SocialMediaIcons from '../../components/SocialMediaIcon/SocialMediaIcon';
import Zoom from 'react-reveal/Zoom';

class Home extends Component {
    render() {
        return (
            <div className={styles.Home} style={{backgroundImage:`linear-gradient(rgba(20, 41, 51 ,0.7), rgba(8, 20, 26 ,0.7)), url(${backImage})`}}>
                <Header/>
                <Zoom duration = {2000}>
                    <div className={styles.author_details}>
                        <AuthorImage height='150px' width='150px'/> 
                        <p>Hello, I am <span>Ambika Kulanthasamy</span> and</p>
                        <h1>I AM A FULL-STACK <span>Node JS | React JS </span>DEVELOPER</h1>
                        <SocialMediaIcons sidebar={false}/>
                    </div>  
                </Zoom>                         
            </div>
        );
    }
}

export default Home;