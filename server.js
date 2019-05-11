const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const contactRoutes = require('./server/routes/contact');
const projectRoutes = require('./server/routes/project');
const authRoutes = require('./server/routes/user');
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
const mongoDB_URI = `mongodb+srv://${process.env.USER}:${process.env.PWD}@cluster0-btzl5.mongodb.net/${process.env.DATABASE}`;

const PORT = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/admin', authRoutes);
app.use((error, req, res, next)=>{
    res.status(error.statusCode).json({
        status:error.status,
        message:error.message,
    })
})
mongoose.connect(encodeURI(mongoDB_URI)).then(result=>{
    app.listen(PORT, () => {
        console.log(`Server start at ${PORT}`);
    })
})
