// importing mongoose package
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema represents the post(data) looks (title, description etc.)
const VaccineSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    sideEffects: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    administration: {
        type: String,
        required: true
    },
    whenNeeded: {
        type: String,
        required: true
    },
    medicalConsiderations: {
        type: String,
        required: false
    }  
});

// model and the schema it will use
module.exports = mongoose.model('Vaccines', VaccineSchema);