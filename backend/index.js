import express from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';

const app = express();

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(234).send('welcome To MERN Tutorials')
});

app.post('/books',async (request,response)=>{
    try{
        if(
            !request.body.title ||

        ) {}
    }catch(error){
        console.log(error);
        response.status().send({message:error.message});
    }
});

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT,()=>{
            console.log(`app is listening on port : ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    });