const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const contactRoutes = require('./server/routes/contact');
const projectRoutes = require('./server/routes/project');
const authRoutes = require('./server/routes/user');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const path = require('path');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use('/api', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/admin', authRoutes);
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.use((error, req, res, next)=>{
    res.status(error.statusCode).json({
        status:error.status,
        message:error.message,
    })
})

mongoose.connect(encodeURI(process.env.MONGODB_URI)).then(result=>{
    app.listen(PORT, () => {
        console.log(`Server start at ${PORT}`);
    })
}).catch(err =>console.log(err))


