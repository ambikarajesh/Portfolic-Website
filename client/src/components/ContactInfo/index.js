import React from 'react';
import styles from './ContactInfo.module.css';
import Zoom from 'react-reveal/Zoom';
import FontAwesome from 'react-fontawesome';

const contacts = [
    {
        icon:'phone',
        title:'PHONE',
        description:'+1 805 710 9045',
        timedelay:500
    },
    {
        icon:'envelope',
        title:'EMAIL',
        description:'ambikula@gmail.com',
        timedelay:1000
    },
    {
        icon:'map-marker',
        title:'LOCATION',
        description:'Los Angeles,CA',
        timedelay:1500
    }
]
const ContactInfo = () => {
    return (
        <div className={styles.bck_gray}>
            <div className={styles.center_wrapper}>
                <div className={styles.info_wrapper}>                
                {contacts.map((contact, index)=>{
                    return (
                        <Zoom duration={contact.timedelay} key={index}>
                        <div className={styles.info_items}>
                            <div className={styles.info_item}>
                                <div className={styles.info_outer}>
                                    <div className={styles.info_inner}>
                                        <div className={[styles.info_icon_square, styles.bck_blue].join(' ')}></div>
                                        <div className={styles.info_icon} >
                                        <FontAwesome
                                            name={contact.icon} 
                                            size='2x' 
                                            style={{color:'#666'}}                                  
                                        />
                                        </div>
                                        
                                        <div className={styles.info_title}>
                                        {contact.title}
                                        </div>
                                        <div className={styles.info_desc}>
                                        {contact.description}
                                        </div>
                                    </div>                            
                                </div>                        
                            </div>
                            </div>
                        </Zoom>
                    )
                })}            
                </div>
            </div>
        </div>
        
    );
};

export default ContactInfo;