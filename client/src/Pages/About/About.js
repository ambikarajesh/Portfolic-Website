import React, { Component } from 'react';
import styles from './About.module.css';
import Title from '../../components/Title';
import Technologies from '../../components/technologies';
import AboutMe from '../../components/aboutMe';
class About extends Component {
    render() {
        return (
            <div className={styles.About}>
                <Title title='About'/>
                <div className={styles.content_wrapper}>
                    <div className={styles.left_content}>
                        <AboutMe/>
                    </div>
                    <div className={styles.right_content}>
                        <Technologies/>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;