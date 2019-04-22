import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AuthorImage from '../Author/Author';
import SocialMediaIcons from '../SocialMediaIcon/SocialMediaIcon';
const styles = {    
    paper: {
        background: 'rgba(20, 41, 51,0.3)',
        color:'#fff',
        padding:'10px'
    },
    active: {
        color: "#43DDE0"
      }
  };
class SideDrawer extends React.Component{
       

    render(){
    const { classes } = this.props;
    
    return (
        <div>            
            <Drawer classes={{paper:classes.paper}} open={this.props.open} onClose={()=> this.props.onclose(false)}>
                <AuthorImage/>
                <List component='nav'>
                    <ListItem button  selected={this.props.active ==='home' ? true : false } classes={{ selected: classes.active }} onClick ={()=>this.props.scrolllTOElement('home')}> 
                        HOME
                    </ListItem>
                    <ListItem button selected={this.props.active ==='about' ? true : false } classes={{ selected: classes.active }} onClick ={()=>this.props.scrolllTOElement('about')}>
                        ABOUT
                    </ListItem>
                    <ListItem button selected={this.props.active ==='portfolio' ? true : false } classes={{ selected: classes.active }} onClick ={()=>this.props.scrolllTOElement('portfolio')}>
                        PORTFOLIO
                    </ListItem>
                    <ListItem button selected={this.props.active ==='contact' ? true : false } classes={{ selected: classes.active }} onClick ={()=>this.props.scrolllTOElement('contact')}>
                        CONTACT
                    </ListItem>
                </List>
                <SocialMediaIcons/>
            </Drawer>            
        </div>
    );
}
}

export default withStyles(styles)(SideDrawer);