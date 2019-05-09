import React from "react";
import { MDBContainer, MDBBtn, MDBInput } from 'mdbreact';
import styles from '../../ContactForm/ContactForm.module.css';
import Zoom from 'react-reveal/Zoom';
import Dialog from '@material-ui/core/Dialog';
import {updateInput, generateData, validateForm, clearInputs, validateImage, clearFile} from '../../utils/updateForm';
import {storage} from '../../../firebase';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {submitProject} from '../../../store/actions/projects';
class Login extends React.Component {
    state = {
        inputs:{            
            title:{
                config:{
                    label:"Title", 
                    icon:"pencil-alt", 
                    type:"text", 
                    name:'title'
                },                 
                value:'',
                validation:{
                    required:true,
                    title:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            languages:{
                config:{
                    label:"Languages", 
                    icon:"pencil-alt", 
                    type:"text", 
                    name:'languages'
                },                 
                value:'',
                validation:{
                    required:true,
                    languages:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            description:{
                config:{
                    label:"Description", 
                    icon:"pencil-alt", 
                    type:"text", 
                    name:'description'
                },                 
                value:'',
                validation:{
                    required:true,
                    description:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },            
        },
        image:{
            name:'',
            valid:false,
            validationMsg:"upload image"
        },
        formValid:true,
        formValidErr:false,
        formSuccess:false
    }
    inputHandler = (element) =>{
        const updateInputs = updateInput(element, this.state.inputs);
        this.setState({inputs:updateInputs})
    }
    fileHandler = (event) => {        
        this.setState({image:event.target.files[0]})
    }
    submitHandler = () => {
        const image = this.state.image;
        const upload = storage.ref(`images/${image.name}`).put(image);
        upload.on('state_changed', (snapshot)=>{
            //console.log(snapshot)
        }, (err)=>{
            this.setState({formValid:false, formValidErr:'Unable to uploadFile'}) 
        }, ()=>{
            storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                let submitData = generateData(this.state.inputs);
                const validForm = validateForm(this.state.inputs);
                const validImage = validateImage(this.state.image);
                const project = {...submitData, image:url}
                if(validForm && validImage){   
                    this.props.dispatch(submitProject(project)).then(res=>{
                        if(res.payload.status === '00'){
                            this.setState({formValid:true, formSuccess:true, formValidErr:res.payload.message})
                            setTimeout(()=>{
                                this.props.history.push('/')
                                this.handleClose();
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
            })
        })
        

    }
    handleClose = () => {        
        const inputs = clearInputs(this.state.inputs);
        const image = clearFile(this.state.image); 
        this.setState({inputs:inputs, image:image, formValidErr:false, formValid:true, formSuccess:false})
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
                        <p className="h5 text-center mb-4">ADD PROJECT</p>
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
                             <input type='file' onChange={this.fileHandler}/> 
                             {showError(this.state.image.validationMsg, this.state.image.valid, "right")}                 
                        </div>
                        <div className="text-center">
                        <MDBBtn style={{backgroundColor:'#43DDE0'}} onClick = {this.submitHandler}>Submit</MDBBtn>            
                        </div>
                    </form>  
                    </Zoom>                                
                </MDBContainer>  
          </Dialog>     
        );
    }
};

export default connect()(withRouter(Login));

