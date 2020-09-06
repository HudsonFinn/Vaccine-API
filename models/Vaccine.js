// importing mongoose package
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema represents the post(data) looks (title, description etc.)
const VaccineSchema = new Schema({
    name: {
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
    duration: { // how long it last for
        type: String,
        required: true
    },
    administration: { // how should it be given
        type: String,
        required: true
    },
    underAge: {
        type: Boolean,
        required: false
    },
    medicalConsiderations: {
        type: String,
        required: false
    }  
});

// model and the schema it will use
module.exports = mongoose.model('Vaccines', VaccineSchema);