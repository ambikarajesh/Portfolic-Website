import React, { Component } from 'react';
import authorImage from '../../images/author-image.png';
import styles from './Author.module.css';
class Author extends Component {
    render() {
        return (
            <div className={styles.Image}>           
                <img src = {authorImage} alt = 'authorImage' height ={this.props.height} width = {this.props.width}/>
            </div>
        );
    }
}

export default Author;
