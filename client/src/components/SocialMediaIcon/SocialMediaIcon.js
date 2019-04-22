import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './SocialMediaIcon.module.css';
class SocialMediaIcon extends Component {
    render() {
        return (
            <div className={styles.Icons}>
                <SocialIcon url='https://www.linkedin.com/in/ambika-kulanthasamy-a69b68135/' network="linkedin" bgColor="#ccc" style={{ height: 20, width: 20 }} className={styles.Icon}/>
                <SocialIcon url='http://facebook.com/' network="facebook" bgColor="#ccc" style={{ height: 20, width: 20 }} className ={styles.Icon}/>
                <SocialIcon url='http://github.com/' network="github" bgColor="#ccc" style={{ height: 20, width: 20 }} className ={styles.Icon}/>
                <SocialIcon url='http://codepen.com/' network="codepen" bgColor="#ccc" style={{ height: 20, width: 20 }} className ={styles.Icon} />
            </div>
        );
    }
}

export default SocialMediaIcon;