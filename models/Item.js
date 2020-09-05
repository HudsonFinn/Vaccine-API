// importing mongoose package
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema represents the post(data) looks (title, description etc.)
const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// model and the schema it will use
module.exports = mongoose.model('Items', ItemSchema) 
