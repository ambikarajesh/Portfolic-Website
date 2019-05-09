

import React from 'react';
import AddProject from './addProject';


class AddProjects extends React.Component {
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
      <React.Fragment> 
        <div style={{margin:'20px 0', padding:'5px 0', cursor:'pointer', border:'1px solid #43DDE0', textAlign:'center', textTransform:'uppercase'}} onClick={this.handleClickOpen}>Add Projects</div>
        <AddProject
          open={this.state.open}
          onClose={this.handleClose}
        />
      </React.Fragment>
    );
  }
}

export default AddProjects;