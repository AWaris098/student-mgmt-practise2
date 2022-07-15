const Joi = require('joi');

const validateCourse = (course) => {
    const schema = {
        name: Joi.string().required(),
        duration: Joi.string().required(),
        startDate: Joi.string().required(),
        endDate: Joi.string().required(),
        intake: Joi.number().required()
    }
    if (!validateCourse) {
        return validateCourse.not
    }
    return (course, schema);
}

module.exports = validateCourse;