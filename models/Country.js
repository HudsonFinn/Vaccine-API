// importing mongoose package
const mongoose = require('mongoose');
const { truncate } = require('fs');
const Schema = mongoose.Schema;

// Schema represents the post(data) looks (title, description etc.)
const CountrySchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    required: {
        type: Array,
        required: true
    },
    recommended: {
        type: Array,
        required: true
    },
    certificatesNeeded: {
        type: Array,
        required:true
    },
    travelAdvice: {
        type:String,
        required:true
    }
});

// model and the schema it will use
module.exports = mongoose.model('Items', CountrySchema) 
