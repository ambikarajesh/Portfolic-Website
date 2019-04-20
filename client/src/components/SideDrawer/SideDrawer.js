import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll'
const styles = {    
    paper: {
        background: 'rgba(20, 41, 51,0.3)',
        color:'#fff',
        padding:'10px'
    },
    
  };
const SideDrawer = (props) => {
    const { classes } = props;
    const scrolllTOElement = (element) =>{
        scroller.scrollTo(element, {
            duration:1500,
            delay:100,
            smooth:true
        })
    }
    return (
        <div>
            <Drawer classes={{paper:classes.paper}} open={props.open} onClose={()=> props.onclose(false)}>
               <List component='nav'>
                   <ListItem button onClick ={()=>scrolllTOElement('home')}> 
                       HOME
                   </ListItem>
                   <ListItem button onClick ={()=>scrolllTOElement('about')}>
                       ABOUT
                   </ListItem>
                   <ListItem button onClick ={()=>scrolllTOElement('portfolio')}>
                      PORTFOLIO
                   </ListItem>
                   <ListItem button onClick ={()=> scrolllTOElement('contact')}>
                       CONTACT
                   </ListItem>
               </List>
            </Drawer>
        </div>
    );
}

export default withStyles(styles)(SideDrawer);