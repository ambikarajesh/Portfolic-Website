import React from "react";
import { MDBContainer, MDBBtn, MDBInput } from 'mdbreact';
import styles from './ContactForm.module.css';
import Zoom from 'react-reveal/Zoom';
import {withRouter} from 'react-router-dom'
import Dialog from '@material-ui/core/Dialog';
import {updateInput, generateData, validateForm, clearInputs} from '../utils/updateForm';
import {connect} from 'react-redux';
import {submitContact} from '../../store/actions/contact';

class ContactForm extends React.Component {
    state = {
        inputs:{
            name:{
                config:{
                    label:"Your name", 
                    icon:"user", 
                    type:"text", 
                    name:'name' 
                },                
                value:'',
                validation:{
                    required:true,
                    name:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            email:{
                config:{
                    label:"Your email", 
                    icon:"envelope", 
                    type:"email", 
                    name:'email'
                },                 
                value:'',
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            subject:{
                config:{
                    label:"Subject", 
                    icon:"tag", 
                    type:"text", 
                    name:'subject'
                },                 
                value:'',
                validation:{
                    required:true,
                    subject:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            message:{
                config:{
                    label:"Your message", 
                    icon:"pencil-alt", 
                    type:"textarea", 
                    row:'2', 
                    name:'message'
                },                 
                value:'',
                validation:{
                    required:true,
                    message:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            }
        },
        formValid:true,
        formValidErr:false,
        formSuccess:false
    }
    inputHandler = (element) =>{
        const updateInputs = updateInput(element, this.state.inputs);
        this.setState({inputs:updateInputs})
    }
    submitHandler = () => {
        const submitData = generateData(this.state.inputs);
        const validForm = validateForm(this.state.inputs);
        if(validForm){                 
            this.props.dispatch(submitContact(submitData)).then(res=> {
                if(res.payload.status === '00'){
                    this.setState({formValid:true, formSuccess:true, formValidErr:res.payload.message})
                    setTimeout(()=>{
                        this.props.history.push('/')
                        const inputs = clearInputs(this.state.inputs)
                        this.setState({inputs:inputs, formValid:true, formSuccess:false, formValidErr:false})
                    }, 3000)
                }else{
                    this.setState({formValid:false, formValidErr:res.payload.message})
                }                
            }).catch(err=>{
                this.setState({formValid:false, formValidErr:'Invalid Inputs'})
            })
        
        }else{
                this.setState({formValid:false, formValidErr:'Invalid Inputs'}) 
            }

    }
    render(){  
        const showError = (errMessage, errorValid, position) => {
            let errorMsg = null;
            if(!errorValid){
                errorMsg = (
                    <div className={position === 'center' ? styles.center_error_alert : styles.right_error_alert}>
                        {errMessage}
                    </div>
                )
            }else{
                errorMsg = (
                    <div className={position === 'center' ? styles.center_success_alert : null}>
                        {errMessage}
                    </div>
                )
            }
            return errorMsg;
        }      
        return (      
                <MDBContainer className={styles.form_container}>
                <Zoom duration={2000}>               
                    <form className={styles.form_wrapper}>
                        <p className="h5 text-center mb-4">GET IN TOUCH</p>
                        {!this.state.formValid ?showError(this.state.formValidErr, this.state.formValid, 'center'): showError(this.state.formValidErr, this.state.formValid, 'center')}
                        <div className="grey-text">
                            {Object.keys(this.state.inputs).map((input, index)=>{
                                return (<div key={index}>
                                            <MDBInput
                                                label={this.state.inputs[input].config.label}
                                                icon={this.state.inputs[input].config.icon}
                                                type={this.state.inputs[input].config.type}
                                                row={this.state.inputs[input].config.row}
                                                value={this.state.inputs[input].value}
                                                onBlur={(event)=>this.inputHandler({event, name:this.state.inputs[input].config.name, blur:true})}
                                                onChange={(event)=>this.inputHandler({event, name:this.state.inputs[input].config.name})}
                                                key={index}
                                                style={{color:'#fff'}}
                                            />
                                            {showError(this.state.inputs[input].validationMsg, this.state.inputs[input].valid, "right")}
                                        </div>)
                            })}                    
                        </div>
                        <div className="text-center">
                        <MDBBtn style={{backgroundColor:'#43DDE0'}} onClick = {this.submitHandler}>Submit</MDBBtn>            
                        </div>
                    </form>  
                    </Zoom> 
                    <Dialog open = {this.state.formSuccess}>
                        <div className={styles.center_success_alert}>
                            <div>{this.state.formValidErr} !!!</div>
                            <div>I will response you in a couple of days...</div>
                        </div>
                    </Dialog>             
                </MDBContainer>       
        );
    }
};

export default connect()(withRouter(ContactForm));

