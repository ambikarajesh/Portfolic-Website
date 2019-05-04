import React from 'react';
const title_style ={
    textAlign:'center',
    textTransform: 'capitalize',
    borderBottom:'2px dotted #43DDE0',
    width:'10%',
    margin:'0 auto'
}
const Title = (props) => {
    return (
        <h1 style={title_style}>{props.title}</h1>
    );
};

export default Title;