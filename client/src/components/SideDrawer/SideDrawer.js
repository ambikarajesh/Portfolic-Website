import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AuthorImage from '../Author/Author';
import SocialMediaIcons from '../SocialMediaIcon/SocialMediaIcon';
import AddProjects from '../addProjects';
import Admin from '../Admin';
import {connect} from 'react-redux';
import Logout from '../Admin/Logout';
const styles = {    
    paper: {
        background: 'rgba(20, 41, 51,1)',
        color:'#fff',
        padding:'10px',
        fontFamily: "'Fresca', sans-serif",
        letterSpacing:1,
        float:'right'
    },
    active: {
        color: "#43DDE0"
      }
  };
class SideDrawer extends React.Component{       

    render(){
    const { classes } = this.props;
    console.log(this.props.isAuth)
    return (                 
            <Drawer classes={{paper:classes.paper}} open={this.props.open} onClose={()=> this.props.onclose(false)}>
                <AuthorImage height='100px' width='100px'/>
                <List component='nav' style={{borderBottom:'1px dotted #666', padding:'10px 0'}}>
                    <ListItem button  selected={this.props.active ==='home' ? true : false } classes={{ selected: classes.active }} onClick ={()=>this.props.scrolllTOElement('home')}> 
                        HOME
                    </ListItem>
                    <ListItem button selected={this.props.active ==='work' ? true : false } classes={{ selected: classes.active }} onClick ={()=>this.props.scrolllTOElement('work')}>
                        WHAT I DO
                    </ListItem>
                    <ListItem button selected={this.props.active ==='portfolio' ? true : false } classes={{ selected: classes.active }} onClick ={()=>this.props.scrolllTOElement('portfolio')}>
                        PORTFOLIO
                    </ListItem>
                    <ListItem button selected={this.props.active ==='about' ? true : false } classes={{ selected: classes.active }} onClick ={()=>this.props.scrolllTOElement('about')}>
                        ABOUT
                    </ListItem>
                    <ListItem button selected={this.props.active ==='contact' ? true : false } classes={{ selected: classes.active }} onClick ={()=>this.props.scrolllTOElement('contact')}>
                        CONTACT
                    </ListItem>
                </List>
                {this.props.isAuth ? <AddProjects/> : null}
                {this.props.isAuth ? <Logout/> : <Admin/>}
                <SocialMediaIcons sidebar = {true}/>
                <div>
                    <p style ={{color:'#ccc', fontStyle:'italic', fontSize:'13px'}}>@copy 2019 by <span style ={{color:'#43DDE0'}}>Ambika</span></p>
                </div>
            </Drawer>
    );
}
}
const mapStateToProps = state => {
    return {
        isAuth: state.userReducer.userId !== null
    }
}
export default connect(mapStateToProps)(withStyles(styles)(SideDrawer));