import mongoose from 'mongoose'
const schema = mongoose.Schema;
const custSchema= new schema(
    {   
        // no:{type: Number, required: true},
        userId:{type:Number},
        fname: { type:String, required: true},
        lname: { type:String, required: true},
        email: { type:String, required: true, unique: true},
        phone: { type: Number, required: true, unique: true},
        gender: { type: String, required: true},
        dlNo: {type: String, required: true, unique: true},
        password: { type:String, default:"00000"},
        isActive: { type:String, default: "true"},
        dob:{type: Date},
        age:{type: Number},
        address: { type: String },
        city: { type:String },
        state:{type: String},
        pin:{type: Number},
        altPhone:{type: Number},
        url: { type:String },
        createdAt:{type : Date, default : Date.now},
        role:{ type:String, default: "user"}

        // age: { type:Number , required: true},
        // gender: { type:String , required: true}
    }
,
{collection:'users'}
)

export default mongoose.model('User',custSchema)