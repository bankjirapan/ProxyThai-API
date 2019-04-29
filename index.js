import config from './config/config';

const express = require("express");
const app = express();

app.get("/",(req,res) =>{

    res.send('Hello world')

})

app.listen(config.port,()=>{
    console.log("Proxy Server api started port :",config.port);
})