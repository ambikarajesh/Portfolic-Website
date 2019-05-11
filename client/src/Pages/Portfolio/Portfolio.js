import React, { Component } from 'react';
import styles from './Portfolio.module.css';
import Title from '../../components/Title';
import PortfolioCards from '../../components/portfolioCards';
import backImage from '../../images/home-page-image.jpeg';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions';
class Portfolio extends Component {   
    componentDidMount(){
        this.props.fetchProjects();
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.projects.length!==this.props.projects.length;
    }
    
    render() {
        const portfolioList = this.props.projects.length >=0 ? (<div className={styles.cards_wrapper}>
                                                                        {this.props.projects.map((project, index)=>{
                                                                            return <PortfolioCards image={project.image} title={project.title} languages={project.languages} link={project.link} key={index}/>
                                                                        })}
                                                                        
                                                                </div>) : null;
        return (
            <div className={styles.Portfolio} style={{backgroundImage:`linear-gradient(rgba(20, 41, 51 ,0.8), rgba(8, 20, 26 ,1)), url(${backImage})`}}>
               <Title title='Portfolio'/>
               {portfolioList}
               
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        projects: state.projectsReducer.projects
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProjects: ()=> dispatch(actionCreators.fetchProjects())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);