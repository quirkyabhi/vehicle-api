import Joi from 'joi';
export default{
    validationSchema(body){
        const schema = Joi.object().keys({
            vehicleId: Joi.string().required(),
            userId: Joi.string().required(),
            issueDate: Joi.date().required(),
            returnDate: Joi.date().required(),
            totalRent: Joi.number().required(),
            vehicleType:Joi.string(),
            vehicleNo:Joi.string(),
            vehicleName:Joi.string(),
            userName: Joi.string(),
            userEmail:Joi.string(),
            userPhone:Joi.number(),
            finePerDay:Joi.number(),
            totalFine:Joi.number(),
            securityAmount:Joi.number(),
            rentPerDay:Joi.number()
            
            
        });
        const{ error, value}= Joi.validate(body, schema);
        if (error && error.details){
            return {error};
        }
        return {value};

    }
}