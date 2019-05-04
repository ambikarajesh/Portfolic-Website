import React from "react";
import { MDBContainer, MDBBtn, MDBInput } from 'mdbreact';
import styles from './ContactForm.module.css';
import Zoom from 'react-reveal/Zoom';
const formInputs = [
    {label:"Your name", icon:"user", type:"text", },
    {label:"Your email", icon:"envelope", type:"email"},
    {label:"Subject", icon:"tag", type:"text"},
    {label:"Your message", icon:"pencil-alt", type:"textarea", row:'2'}
]
const ContactForm = () => {
  return (      
        <MDBContainer className={styles.form_container}>
         <Zoom duration={2000}>               
            <form className={styles.form_wrapper}>
                <p className="h5 text-center mb-4">GET IN TOUCH</p>
                <div className="grey-text">
                    {formInputs.map((input, index)=>{
                        return <MDBInput
                                    label={input.name}
                                    icon={input.icon}
                                    type={input.type}
                                    row={input.row}
                                    key={index}
                                    style={{color:'#fff'}}
                                />
                    })}                    
                </div>
                <div className="text-center">
                <MDBBtn style={{backgroundColor:'#43DDE0'}}>Submit</MDBBtn>            
                </div>
            </form>  
            </Zoom>              
        </MDBContainer>       
  );
};

export default ContactForm;