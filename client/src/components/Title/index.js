import React from 'react';
const title_style ={
    textAlign:'center',
    textTransform:'uppercase',
    margin:'0 auto 50px',
    paddingTop:'75px',
    fontSize:'30px'
    
}
const Title = (props) => {
    return (
        <h1 style={title_style}>{props.title}</h1>
    );
};

export default Title;