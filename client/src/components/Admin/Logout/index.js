import React, { Component } from 'react';
import {MDBBtn} from 'mdbreact';
import {connect} from 'react-redux';
import * as actionCreators from '../../../store/actions';
class Logout extends Component {
    buttonHandler = () =>{
        this.props.dispatch(actionCreators.logout());
    }
    render() {
        return (
            <MDBBtn style={{backgroundColor:'#43DDE0'}} onClick={this.buttonHandler}>Logout</MDBBtn>
        );
    }
}

export default connect()(Logout);