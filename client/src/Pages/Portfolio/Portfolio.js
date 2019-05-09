import React, { Component } from 'react';
import styles from './Portfolio.module.css';
import Title from '../../components/Title';
import PortfolioCards from '../../components/portfolioCards';
import backImage from '../../images/home-page-image.jpeg';
import {connect} from 'react-redux';
import {fetchProjects} from '../../store/actions/projects';

class Portfolio extends Component {
    state={
        projects:[]
    }
    componentDidMount(){
        this.props.dispatch(fetchProjects()).then(res=>{
            if(res.payload.status === '00'){
                this.setState({projects:res.payload.projects})
            }
        }).catch(err=>{

        })
    }
    render() {
        return (
            <div className={styles.Portfolio} style={{backgroundImage:`linear-gradient(rgba(20, 41, 51 ,0.8), rgba(8, 20, 26 ,1)), url(${backImage})`}}>
               <Title title='Portfolio'/>
               <div className={styles.cards_wrapper}>
                    {this.state.projects.map((project, index)=>{
                        return <PortfolioCards image={project.image} title={project.title} content={project.languages} key={index}/>
                    })}
                    
               </div>
               
            </div>
        );
    }
}

export default connect()(Portfolio);