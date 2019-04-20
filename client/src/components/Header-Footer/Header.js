import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from '../SideDrawer/SideDrawer';



class Header extends Component {
    state = {
        showSidebar : false,
        showHeader:false
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }
    
    ToggleButton = (value) => {
        this.setState({showSidebar:value});
    }
    handleScroll = () => {
        if(window.scrollY>0){
            this.setState({showHeader:true});
        }else{
            this.setState({showHeader:false})
        }
    }
    render() {    
        return (
            <div>
                <AppBar position="fixed" style ={{backgroundColor:this.state.showHeader ? 'rgba(20, 41, 51 ,0.7)': 'transparent', boxShadow:'none'}}>
                    <Toolbar>
                        {!this.state.showSidebar? 
                        <IconButton style = {{color:'#fff', cursor:'pointer'}} onClick = {()=>this.ToggleButton(true)}>
                            <MenuIcon />
                        </IconButton> : null}
                    </Toolbar>
                    <SideDrawer open = {this.state.showSidebar} onclose = {(value)=> this.ToggleButton(value)}/>
                    
                </AppBar>
            </div>
        );
    }
}

export default Header;