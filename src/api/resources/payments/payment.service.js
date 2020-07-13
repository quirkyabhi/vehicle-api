import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            issueId: Joi.string().required(),
            fine: Joi.number().required(),
            totalRent: Joi.number().required(),
            status: Joi.string().required()
            
        });
        const{ error, value}= Joi.validate(body, schema);
        if (error && error.details){
            return {error};
        }
        return {value};

    }
}