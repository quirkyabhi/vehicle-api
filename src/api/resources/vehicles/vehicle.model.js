import mongoose from 'mongoose'
const schema = mongoose.Schema;
const vehicleSchema= new schema(
    {   
        // no:{type: Number, required: true},
        vehicleId:{type:Number},
        vehicleName: { type:String, required: true},
        description:{ type:String },
        vehicleNo: { type:String, required: true, unique: true},
        vehicleType: { type: String, required: true},
        registrationNo: { type: String, required: true,unique: true},
        insuranceNo: {type: String, required: true, unique: true},
        rentPerDay: { type:Number, required: true},
        securityAmount: { type:Number, required: true, default: 0},
        fine:{type: Number, required: true, default:100},
        url:{type: String},
        year: { type: Number },
        kmRan: { type:Number },
        model:{type: String},
        color:{type: String},
        isAvailable:{type: String},
        createdAt:{type : Date, default : Date.now},
        isActive:{ type:String, default: "true"}

        // age: { type:Number , required: true},
        // gender: { type:String , required: true}
    }
,
{collection:'vehicles'}
)

export default mongoose.model('Vehicle',vehicleSchema)