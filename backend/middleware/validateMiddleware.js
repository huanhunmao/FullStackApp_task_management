const Joi = require('joi');

module.exports = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        completed: Joi.boolean(),
        dueDate:Joi.date()
    })
    const {error} = schema.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    next()
}