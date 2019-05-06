import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './knowledgeItems.module.css';
import Zoom from 'react-reveal/Zoom';
const techItems = [
    {icon:'code', title:'Web Application Development', content:'Fast, responsive and engaging apps that bring your ideas to life.'},
    {icon:'cog', title:'API Integration & Development', content:'REST API integration. REST API development with Node.js.'},
    {icon:'database', title:'Database Design', content:'Database architectures in MongoDB, MySQL, always aiming for performance, scale and stability.'},
    {icon:'cloud', title:'Cloud Integration', content:'Deployment of NodeJS apps, ReactJS apps and databases to leading cloud platforms such as Heroku, Firebase'},
    {icon:'funnel-dollar', title:'Payment Gateway Integration', content:'Integration with the most popular Payment Gateways such as Stripe and Paypal.'}

]
class knowledgeItems extends Component {
    render() {
        return (
            <div className={styles.items_wrapper}>
                {techItems.map(item=>{
                    return (
                        <Zoom duration={1500}>
                            <div className={styles.item_wrapper}>                        
                                <FontAwesome
                                    name={item.icon} 
                                    size='2x' 
                                    style={{background:'#43DDE0', width:'65px', borderRadius:'50% 50%', padding:'15px', color:'#fff'}}                                 
                                />
                                <h5>{item.title}</h5>
                                <p>{item.content}</p>
                            </div>
                        </Zoom>
                    )
                })}
                
            </div>
        );
    }
}

export default knowledgeItems;