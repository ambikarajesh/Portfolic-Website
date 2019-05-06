import React, { Component } from 'react';
import styles from './About.module.css';
import Title from '../../components/Title';
class About extends Component {
    render() {
        return (
            <div className={styles.About}>
                <Title title='About'/>
            </div>
        );
    }
}

export default About;