import React from 'react';
import resume from '../../Assets/Resume-AK.pdf';
import {MDBBtn} from 'mdbreact';
const Resume =() => {
return (      
        <a href = {resume}>
            <MDBBtn style={{backgroundColor:'#43DDE0', margin:'20px'}}>My Resume</MDBBtn>
        </a>     
    );
}


export default Resume;