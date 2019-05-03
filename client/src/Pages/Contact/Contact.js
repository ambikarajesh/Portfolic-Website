import React, { Component } from 'react';
import styles from './Contact.module.css';
import ContactInfo from '../../components/ContactInfo';
import backImage from '../../images/home-page-image.jpeg';
class Contact extends Component {
    render() {
        return (
            <div className={styles.Contact} style={{backgroundImage:`linear-gradient(rgba(20, 41, 51 ,0.7), rgba(8, 20, 26 ,0.7)), url(${backImage})`}}>
                <ContactInfo/>                
            </div>
        );
    }
}

export default Contact;