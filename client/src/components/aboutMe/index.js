import React from 'react';
import styles from './aboutMe.module.css';
import AuthorImage from '../Author/Author';
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon';
import {MDBBtn} from 'mdbreact';
import Zoom from 'react-reveal/Zoom';
const AboutMe = () => {
    return (
        <Zoom duration={1000}>
            <div className={styles.AboutMe}>
                <AuthorImage height='150px' width='150px'/> 
                <h4>React | Node JS Developer</h4>
                <SocialMediaIcon sidebar={false}/>
                <p>Hi there, my name is <span style={{color:'#43DDE0'}}>Ambika Kulanthasamy</span>.</p>
                <p>As a Full Stack Web Developer, I can build fullstack products from scratch, developing and integrating APIs, working with a variety of databases and clould platforms.</p>
                <p>This portfolio will showcase some of my interest in Web Development. Dive into my Resume to find out about me more.</p>
                <MDBBtn style={{backgroundColor:'#43DDE0'}}>My Resume</MDBBtn> 
            </div>
        </Zoom>
    );
};

export default AboutMe;