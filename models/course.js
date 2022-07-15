const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                v.length < 3
                return v
            },
            message: 'course length should be more than 3 character'
        }
    },
    duration: {
        type: String,
        reuired: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String,
        required: true
    },
    intake: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Course', courseSchema);