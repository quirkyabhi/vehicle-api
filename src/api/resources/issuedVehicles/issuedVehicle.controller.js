import IssuedVehicle from './issuedVehicle.model'
import issuedVehicleService from './issuedVehicle.service';
// import { response } from 'express';
export default{
    findAll(req,res){
        // res.json({msg:"find all users"});
        IssuedVehicle.find().then(employee=>res.json(employee))
        .catch(
            err => res.status(500).json(err)
        )
    },

    findOne(req,res){
        const id = req.params.id
        IssuedVehicle.findById(id).then(
            employee =>{
                if(!employee){
                    return res.status(400).json(
                        { err:"vehicle not found" }
                    )
                }
                else{
                    return res.json(employee)
                }
            }
        ).catch(
            err => res.status(500).json(err)
        )
    },

    delete(req,res){
        const id = req.params.id
        IssuedVehicle.findByIdAndRemove(id).then(
            employee =>{
                if(!employee){
                    return res.status(400).json(
                        { err:"vehicle not found" }
                    )
                }
                else{
                    return res.json(employee)
                }
            }
        ).catch(
            err => res.status(500).json(err)
        )
    },

    async create(req, res){
        try {
            const {error, value} = issuedVehicleService.validationSchema(req.body);
            if (error && error.details) {
                return res.status(500).json( error.details );
            }
        await IssuedVehicle.create(value)
        .then(employee => res.json(employee))
        .catch(err=> res.status(500).json(err));
        
            console.log(value)
        } catch (error) {
            console.log(error)
        }
  
    },
    update(req,res){
        const id = req.params.id
        IssuedVehicle.findByIdAndUpdate({_id:id},{$set:req.body},{new: true}).then(
            employee =>{
                if(!employee){
                    return res.status(400).json(
                        { err:"employee not found" }
                    )
                }
                else{
                    return res.json(employee)
                }
            }
        ).catch(
            err => res.status(500).json(err)
        )
    },
    findMyIssuedVehicle(req, res,next){
        let {id} = req.params;
        // const {page =1, perPage=10}= req.query;
        // const options={
        //     page: parseInt(page,10),
        //     limit:parseInt(perPage,10),
        //     populate:'userId refId'
        // }

        IssuedVehicle.find({'userId':id}).then(
            data => res.json(data)
        )
        // Transaction.paginate({'userId':id},options).then(
        //     data => res.json(data)
        // )
        .catch(
            err => res.status(500).json(err)
        )
    }


}