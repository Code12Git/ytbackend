const mongoose=require('mongoose')
const connectionurl="mongodb+srv://Sak12:Saxena@cluster0.os363zi.mongodb.net/ytshorts?retryWrites=true&w=majority"
mongoose.set('strictQuery', false)
mongoose.connect(connectionurl,{
    useNewUrlParser:true,
  
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connection established')
}).catch((error)=>{
    console.log(error)
})