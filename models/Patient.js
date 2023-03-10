const mongoose = require('mongoose');

const Patient = new mongoose.Schema({
    doctors: [String],
    patientId: {
        type: String,
    },
    logo: {
        type: String,
    },
    phone: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    caretakers_name: {
        type: String
    },
    caretakers_relation: {
        type: String
    },
    caretakers_phone: {
        type: Number
    },
    caretakers_time: {
        type: String
    },
    health_plan: {
        type: String
    },
    health_plan_date: {
        type: Date
    },
    amount: {
        type: Number
    },
    payment_mode: {
        type: String
    },
    payment_date: {
        type: Date
    },
    ref_id: {
        type: String
    },
    next_payment_date: {
        type: Date
    },
    observations: [{
        desc: {
            type: String,
        },
        createdOn: Date,
    }],
    otp: String,
    otpExpiresIn: String
}, {timestamps: true})

module.exports = mongoose.model('patient', Patient)
