import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const styles = {    
    paper: {
        background: 'rgba(20, 41, 51,0.3)',
        color:'#fff',
        padding:'10px'
    },
    active: {
        color: 'red',
      }
  };
const SideDrawer = (props) => {
    const { classes } = props;
    return (
        <div>
            <Drawer classes={{paper:classes.paper}} open={props.open} onClose={()=> props.onclose(false)}>
               <List component='nav'>
                   <ListItem button onClick ={()=>{console.log('Home')}}> 
                       HOME
                   </ListItem>
                   <ListItem button onClick ={()=>{console.log('About')}}>
                       ABOUT
                   </ListItem>
                   <ListItem button onClick ={()=>{console.log('Portfolio')}}>
                      PORTFOLIO
                   </ListItem>
                   <ListItem button onClick ={()=> {console.log('Contact')}}>
                       CONTACT
                   </ListItem>
               </List>
            </Drawer>
        </div>
    );
}

export default withStyles(styles)(SideDrawer);