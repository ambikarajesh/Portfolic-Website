import React from "react";
import Dialog from '@material-ui/core/Dialog';
import {MDBContainer, MDBInput, MDBBtn} from 'mdbreact';
import styles from '../../ContactForm/ContactForm.module.css';
import {storage} from '../../../firebase';
class AddProject extends React.Component {
    state = {
        image:'',
        url:''
    }
    handleClose = () => { 
        this.props.onClose();
    };
    inputHandler = (event) => {
        console.log(event.target.files[0])
        this.setState({image:event.target.files[0]})
    }
    submitHandler = () => {
        const image = this.state.image;
        const upload = storage.ref(`images/${image.name}`).put(image);
        upload.on('state_changed', (snapshot)=>{
            console.log(snapshot)
        }, (err)=>{
            console.log(err)
        }, ()=>{
            storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                console.log(url)
                this.setState({url:url})
            })
        })
    }
    render(){  
           
        return (
          <Dialog open = {this.props.open} onClose={this.handleClose} fullWidth={true} maxWidth='sm'>      
                <MDBContainer className={styles.login_container}>     
                    <form>
                        <p className="h5 text-center mb-4">ADD PROJECT</p>
                        <div className="grey-text">                            
                            <MDBInput
                                label="Title"                           
                                type="text" 
                                icon="pencil-alt"                          
                            />
                            <MDBInput
                                label="Languages"                           
                                type="text" 
                                icon="pencil-alt"                          
                            />
                            <MDBInput
                                label="Description"                          
                                type="textarea"
                                row="2"
                                icon="pencil-alt"                          
                            />
                           <input type='file' onChange={this.inputHandler}/>                       
                        </div>
                        <div className="text-center">
                        <MDBBtn onClick={this.submitHandler}>Login</MDBBtn>
                        </div>
                    </form>      
                </MDBContainer>     
          </Dialog>     
        );
    }
};

export default AddProject;

