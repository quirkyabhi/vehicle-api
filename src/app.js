import '@babel/polyfill';
const express = require('express')
const app = express()
const PORT = 3000
import { restRouter } from "./api";
import  mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost/vehicleHatt',{useNewUrlParser:true, useUnifiedTopology: true,'useCreateIndex':true});
// const users=[
//     {id: 1, name:'John'},
//     {id: 2, name:'Johny'},
//     {id: 3, name:'Tony'},
//     {id: 4, name:'Rocky'},
// ]
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    { extended:false }
));
app.use(cors());
app.use('/api',restRouter);
app.use((req, res, next)=>{
    const error = new Error("Not Founf");
    error.status = 404;
    error.message="Invalid route";
    next(error);
    

})
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    return res.json({
        error: {
            message: error.message
        }
    })
});

app.use(function (req, res,next){
    console.log("middleware before  api call");
    next();
});
// app.get('/users',(req, res)=>{
//     res.json(users)
// })
app.get('/',(req, res)=>{
    res.json(
        { msg:'API running ' }
        )
})
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
