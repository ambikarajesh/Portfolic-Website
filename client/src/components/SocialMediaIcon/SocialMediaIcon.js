import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './SocialMediaIcon.module.css';
const SocialMediaIcon = (props) => {
   return (
        <div className={props.sidebar ? styles.Icons : null}>
            <SocialIcon url='https://www.linkedin.com/in/ambika-kulanthasamy-a69b68135/' network="linkedin" bgColor="#666" style={props.sidebar ? { height: 20, width: 20 }: { height: 40, width: 40 } } className={props.sidebar? styles.sidebarIcon : styles.pageIcon}/>
            <SocialIcon url='http://facebook.com/' network="facebook" bgColor="#666" style={props.sidebar ? { height: 20, width: 20 }: { height: 40, width: 40 } } className={props.sidebar? styles.sidebarIcon : styles.pageIcon}/>
            <SocialIcon url='http://github.com/' network="github" bgColor="#666" style={props.sidebar ? { height: 20, width: 20 }: { height: 40, width: 40 } } className={props.sidebar? styles.sidebarIcon : styles.pageIcon}/>
            <SocialIcon url='http://codepen.com/' network="codepen" bgColor="#666" style={props.sidebar ? { height: 20, width: 20 }: { height: 40, width: 40 } } className={props.sidebar? styles.sidebarIcon : styles.pageIcon} />
        </div>
   );
}

export default SocialMediaIcon;