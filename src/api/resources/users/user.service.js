import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            // role:Joi.string().required(),
            fname: Joi.string().required(),
            lname: Joi.string().required(),
            phone: Joi.number().required(),
            gender: Joi.string().required(),
            dlNo: Joi.string().required(),
        });
        const{ error, value}= Joi.validate(body, schema);
        if (error && error.details){
            return {error};
        }
        return {value};

    },
    validationLoginSchema(body){
        const schema = Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            // role=

        });
        const{ error, value}= Joi.validate(body, schema);
        if (error && error.details){
            return {error};
        }
        return {value};

    }
}