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
    userId:{
        red:'User',
        type:Schema.Types.ObjectId,
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
    isActive:{
        type:String,
        required: true,
        default: "true"
    },
    createdAt: {
        type:Date,
        required: true,
        default: Date.now
    }
},{collection: 'issuedVehicles'});
export default new mongoose.model('IssuedVehicle',issuedvehicleSchema);