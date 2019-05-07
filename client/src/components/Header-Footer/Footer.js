import React from 'react';
import SocialMediaIcons from '../SocialMediaIcon/SocialMediaIcon';
const Footer = () => {
    return (
        <div style ={{backgroundColor:'rgba(20, 41, 51 ,0.9)', height:'25%',textAlign:'center', padding:'30px'}}>
            <SocialMediaIcons sidebar = {false}/>
            <p style ={{color:'#ccc', fontStyle:'italic', fontSize:'13px', padding:'10px'}}>@copy 2019 by <span style ={{color:'#43DDE0'}}>Ambika</span></p>
        </div>
    );
};

export default Footer;