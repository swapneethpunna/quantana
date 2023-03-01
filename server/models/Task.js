const mongoose = require('mongoose');
// const Task = require('./models/Data');
const TaskSchema = new mongoose.Schema({
    movie_name:{
        type:String,
        trim:true,
        maxlength:[25, "Can't exceed more then 25 letters"]
    },
    release_date:{
        type:String,
        trim:true,
        maxlength:[25, "Can't exceed more then 25 letters"]
    }

})


module.exports = mongoose.model('Task',TaskSchema);