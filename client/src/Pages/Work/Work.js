import React, { Component } from 'react';
import styles from './Work.module.css';
import Title from '../../components/Title';
class Work extends Component {
    render() {
        return (
            <div className={styles.Work}>
                <Title title='What I Do'/>
            </div>
        );
    }
}

export default Work;