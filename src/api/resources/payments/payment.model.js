import mongoose from 'mongoose'
import IssuedVehicle from '../issuedVehicles/issuedVehicle.model'
const Schema = mongoose.Schema;
const paymentSchema= new Schema({
    issueId: { 
        ref:'IssuedVehicle', 
        type:Schema.Types.ObjectId, 
        required: true 
    },
    fine:{
        type: Number,
        required: true
    },
    totalRent:{
        type:Number,
        required: true
    },
    status:{
        type: String,
        default:"Paid"
    },
    createdDate: {
        type:Date,
        default: Date.now
    }
},{collection: 'payments'});
export default new mongoose.model('Payment',paymentSchema);