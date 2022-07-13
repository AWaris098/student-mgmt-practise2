const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
        validate : {
            validator : (v) => {
                v.length < 3 
                return v
            },
            message : 'course length should be more than 3 character'
        }
    },

    duration : {
        type : String,
        reuired : true 
    },
    startDate : {
        type : String,
        required : true
    },
    endDate : {
        type : String ,
        required : true
    },
    intake : {
        type : Number,
        required : true
    }
})

const Course = mongoose.model('Course', courseSchema)

const validateCourse = (course) => {
    const schema = {
        name : Joi.string().required(),
        duration : Joi.string().required(),
        startDate : Joi.string().required(),
        endDate : Joi.string().required(),
        intake : Joi.number().required()
    }
    if(!validateCourse){
        console.log(validateCourse.not)
    }
    return(course,schema)
}

const courseModel = {Course,validateCourse}
// exports.Course = Course
// exports.validateCourse = validateCourse

module.exports = courseModel