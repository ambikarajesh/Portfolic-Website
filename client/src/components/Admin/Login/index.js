import React from "react";
import { MDBContainer, MDBBtn, MDBInput } from 'mdbreact';
import styles from '../../ContactForm/ContactForm.module.css';
import Zoom from 'react-reveal/Zoom';
import Dialog from '@material-ui/core/Dialog';
import {updateInput, generateData, validateForm, clearInputs} from '../../utils/updateForm';

class Login extends React.Component {
    state = {
        inputs:{            
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
            password:{
                config:{
                    label:"Password", 
                    icon:"lock", 
                    type:"password", 
                    name:'password'
                },                 
                value:'',
                validation:{
                    required:true,
                    password:true
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
            console.log(submitData);
            this.handleClose();
        }else{
            this.setState({formValid:false, formValidErr:'Invalid Inputs'}) 
        }

    }
    handleClose = () => {        
        const inputs = clearInputs(this.state.inputs); 
        this.setState({inputs:inputs, formValidErr:false, formValid:true, formSuccess:false}) 
        this.props.onClose();
    };
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
          <Dialog open = {this.props.open} onClose={this.handleClose} fullWidth={true} maxWidth='sm'>      
                <MDBContainer className={styles.login_container}>
                <Zoom duration={2000}>               
                    <form className={styles.form_wrapper}>
                        <p className="h5 text-center mb-4">ADMIN</p>
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
                        <MDBBtn style={{backgroundColor:'#43DDE0'}} onClick = {this.submitHandler}>Login</MDBBtn>            
                        </div>
                    </form>  
                    </Zoom>                                
                </MDBContainer>  
          </Dialog>     
        );
    }
};

export default Login;

