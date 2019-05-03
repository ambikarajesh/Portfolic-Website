import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styles from './SocialMediaIcon.module.css';
const SocialMediaIcon = (props) => {
   return (
        <div className={props.sidebar ? styles.Icons : null}>
            <SocialIcon url='https://www.linkedin.com/in/ambika-kulanthasamy-a69b68135/' network="linkedin" bgColor="#ccc" style={props.sidebar ? { height: 20, width: 20 }: { height: 35, width: 35 } } className={props.sidebar? styles.sidebarIcon : styles.pageIcon}/>
            <SocialIcon url='http://facebook.com/' network="facebook" bgColor="#ccc" style={props.sidebar ? { height: 20, width: 20 }: { height: 35, width: 35 } } className={props.sidebar? styles.sidebarIcon : styles.pageIcon}/>
            <SocialIcon url='http://github.com/' network="github" bgColor="#ccc" style={props.sidebar ? { height: 20, width: 20 }: { height: 35, width: 35 } } className={props.sidebar? styles.sidebarIcon : styles.pageIcon}/>
            <SocialIcon url='http://codepen.com/' network="codepen" bgColor="#ccc" style={props.sidebar ? { height: 20, width: 20 }: { height: 35, width: 35 } } className={props.sidebar? styles.sidebarIcon : styles.pageIcon} />
        </div>
   );
}

export default SocialMediaIcon;