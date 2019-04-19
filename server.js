const express = require('express');


const app = express();
const PORT = 3001;
app.get('/api/customers', (req, res, next) =>{
    const customers = [
        { id:1, name:"Ambika Kulanthasamy"},
        { id:2, name:"Rajesh Duraisamy"},
         {id:3, name:"Turiya Rajesh"}
    ]
    res.json({
        customers:customers
    })
})
app.listen(3001)