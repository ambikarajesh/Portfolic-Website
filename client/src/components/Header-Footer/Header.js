import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../SideDrawer/SideDrawer';
import {scroller} from 'react-scroll';
import { withStyles } from '@material-ui/core/styles';
const styles = {
    
    grow: {
      flexGrow: 1,
    },
    name:{
        color:'#43DDE0',
        fontSize:'25px'
    }
  };
  

class Header extends Component {
    state = {
        showSidebar : false,
        showHeader:false,
        active:'home'
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    scrollTOElement = (element) =>{        
        scroller.scrollTo(element, {
            duration:1500,
            delay:100,
            smooth:true
        })
        this.setState({active:element})
    }
    ToggleButton = (value) => {
        this.setState({showSidebar:value});
    }
    handleScroll = () => {
        if(window.scrollY>0 && window.scrollY<=300){
            this.setState({showHeader:true, active:"home"});
        }
        else if(window.scrollY>400 && window.scrollY<1200){
            this.setState({showHeader:true, active:"about"});
        }
        else if(window.scrollY>=1200 && window.scrollY<1600){
            this.setState({showHeader:true, active:"portfolio"});
        }
        else if(window.scrollY>1600){
            this.setState({showHeader:true, active:"contact"})
        }else{
            this.setState({showHeader:false, actve:"home"})
        }
    }
    render() {   
        const { classes } = this.props; 
        return (
            <div>
                <AppBar position="fixed" style ={{backgroundColor:this.state.showHeader ? 'rgba(20, 41, 51 ,0.9)': 'transparent', boxShadow:'none'}}>
                    {!this.state.showSidebar?
                        <Toolbar>                         
                            <IconButton style = {{color:'#fff'}} onClick = {()=>this.ToggleButton(true)}>
                                <MenuIcon />
                            </IconButton>
                            <div className={classes.grow} />
                            <div className={classes.name}>Ambika Kulathasamy</div>
                        </Toolbar>: null}
                    <SideDrawer open = {this.state.showSidebar} active = {this.state.active} scrolllTOElement = {(element)=>this.scrollTOElement(element)} onclose = {(value)=> this.ToggleButton(value)}/>
                   
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);