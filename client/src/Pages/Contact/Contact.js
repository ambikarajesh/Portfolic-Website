import React, { Component } from 'react';
import styles from './Contact.module.css';
import ContactInfo from '../../components/ContactInfo';
import ContactForm from '../../components/ContactForm';
import backImage from '../../images/home-page-image.jpeg';
class Contact extends Component {
    render() {
        return (
            <div className={styles.Contact} style={{backgroundImage:`linear-gradient(rgba(20, 41, 51 ,0.8), rgba(8, 20, 26 ,1)), url(${backImage})`}}>
                <ContactInfo/>     
                <ContactForm/>           
            </div>
        );
    }
}

export default Contact;