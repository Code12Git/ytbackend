const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const connectionurl=process.env.DATABASE
mongoose.set('strictQuery', false)
mongoose.connect(connectionurl,{
    useNewUrlParser:true,
  
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connection established')
}).catch((error)=>{
    console.log(error)
})