import React from 'react';
const title_style ={
    textAlign:'center',
    textTransform:'uppercase',
    margin:'0 auto',
    paddingTop:'75px',
    fontSize:'30px'
    
}
const Title = (props) => {
    return (
        <div>
        <h1 style={title_style}>{props.title}</h1>
        <hr style={{border:'1px double #43DDE0', width:'75px', alignContent:'center', marginBottom:'50px'}}/>
        </div>
    );
};

export default Title;