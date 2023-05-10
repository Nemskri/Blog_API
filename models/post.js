const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title:{
        type: String
    },
    desc:{
        type: String
    },
    img:{
        type: String
    }
})

module.exports = mongoose.model('Post', PostSchema)