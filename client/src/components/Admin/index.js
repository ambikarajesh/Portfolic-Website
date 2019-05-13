import React from 'react';
import {MDBBtn} from 'mdbreact';
import Login from './Login';

class Admin extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  
  render() {
    return (
      <div> 
        <MDBBtn style={{backgroundColor:'#43DDE0'}} onClick={this.handleClickOpen}>Admin</MDBBtn>        
        <Login
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default Admin;