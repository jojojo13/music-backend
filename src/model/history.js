const mongoose=require('mongoose')
const mongo=require('mongodb')

const history=new mongoose.Schema({
    userID:{type:mongo.ObjectId},
    songs:{type:Array,default:[]},
})

module.exports= mongoose.model('history',history)