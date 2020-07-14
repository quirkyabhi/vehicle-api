import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            vehicleName: Joi.string().required(),
            vehicleNo: Joi.string().required(),
            vehicleType: Joi.string().required(),
            registrationNo: Joi.string().required(),
            insuranceNo: Joi.string().required(),
            rentPerDay: Joi.number().required(),
            securityAmount: Joi.number(),
            fine: Joi.number()
            
        });
        const{ error, value}= Joi.validate(body, schema);
        if (error && error.details){
            return {error};
        }
        return {value};

    }
}