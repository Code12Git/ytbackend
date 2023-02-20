const express=require('express')
const dotenv=require('dotenv')

const data=require('../Backend/data.js')
const Videos =require('./models/model.js')

//app config
const app=express()
dotenv.config({path:'./config.env'})
const port=process.env.PORT || 9000


//middlewares

app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next()
})
//DB config
require('./db/db')

//api endpoints

app.get('/',(req,res)=>{
    res.status(200).send('Hello!')
})

app.get('/v1/posts',(req,res)=>{
    res.status(200).send(data)
})

app.get('/v2/posts',(req,res)=>{
    //Post request is to add data to database
    

    Videos.find({},(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.post('/v2/posts',(req,res)=>{
    //Post request is to add data to database
    const dbVideos =req.body

    Videos.create(dbVideos,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})
//listener section
app.listen(port,(req,res)=>{
       console.log(`Server is up on PORT: ${port}`) 
})