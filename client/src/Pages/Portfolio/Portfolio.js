import React, { Component } from 'react';
import styles from './Portfolio.module.css';
import Title from '../../components/Title';
import PortfolioCards from '../../components/portfolioCards';
import backImage from '../../images/home-page-image.jpeg';
const projects = [
    {image:backImage, title:'project_one', content:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    {image:backImage, title:'project_two', content:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    {image:backImage, title:'project_three', content:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    {image:backImage, title:'project_four', content:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'},
    {image:backImage, title:'project_four', content:'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'}
]
class Portfolio extends Component {
    render() {
        return (
            <div className={styles.Portfolio} style={{backgroundImage:`linear-gradient(rgba(20, 41, 51 ,0.8), rgba(8, 20, 26 ,1)), url(${backImage})`}}>
               <Title title='Portfolio'/>
               <div className={styles.cards_wrapper}>
                    {projects.map((project, index)=>{
                        return <PortfolioCards image={project.image} title={project.title} content={project.content} key={index}/>
                    })}
                    
               </div>
               
            </div>
        );
    }
}

export default Portfolio;