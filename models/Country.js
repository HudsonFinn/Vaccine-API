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
        type: Object,
        required: true
    },
    recommended: {
        type: Object,
        required: true
    },
    certificatesNeeded: {
        type: Object,
        required:true
    },
    travelAdvice: {
        type:String,
        required:true
    }
});

// model and the schema it will use
module.exports = mongoose.model('Items', CountrySchema) 
