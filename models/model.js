const mongoose=require('mongoose')

const ytSchema=mongoose.Schema({
    url:String,
    likes:String,
    messages:String,
    shares:String
})

//Collection in database
module.exports= mongoose.model('ytvideos',ytSchema)