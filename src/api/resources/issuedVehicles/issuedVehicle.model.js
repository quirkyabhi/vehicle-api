import mongoose from 'mongoose'
import User from '../users/user.model'
import Vehicle from '../vehicles/vehicle.model'
const Schema = mongoose.Schema;
const issuedvehicleSchema= new Schema({
    vehicleId: { 
        ref:'Vehicle', 
        type:Schema.Types.ObjectId, 
        required: true 
    },
    vehicleNo: {  
        type:String,
        required: true 
    },
    vehicleType: {  
        type:String,
    },
    vehicleName: {  
        type:String,
        required: true 
    },
    userId:{
        ref:'User',
        type:Schema.Types.ObjectId,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    userEmail:{
        type: String,
        required: true
    },
    userPhone:{
        type:Number,
        required: true
    },
    issueDate:{
        type: Date,
        required: true
    },
    returnDate:{
        type:Date,
        required: true
    },
    totalRent:{
        type: Number,
        required: true
    },
    finePerDay:{
        type: Number,
    },
    rentPerDay:{
        type: Number,
    },
    totalFine:{
        type: Number,
    },
    securityAmount:{
        type: Number
    },
    isActive:{
        type:String,
        default: "true"
    },
    createdAt: {
        type:Date,
        default: Date.now
    }
},{collection: 'issuedVehicles'});
export default new mongoose.model('IssuedVehicle',issuedvehicleSchema);