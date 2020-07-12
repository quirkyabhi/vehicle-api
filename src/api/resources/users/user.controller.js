import User from './user.model'
import userService from './user.service';
// import { response } from 'express';
export default{
    findAll(req,res){
        // res.json({msg:"find all users"});
        User.find().then(employee=>res.json(employee))
        .catch(
            err => res.status(500).json(err)
        )
    },
    findOne(req,res){
        const id = req.params.id
        User.findById(id).then(
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
    findOne(req,res){
        const id = req.params.id
        User.findByIdAndRemove(id).then(
            employee =>{
                if(!employee){
                    return res.status(400).json(
                        { err:"customer..... not found" }
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
    update(req,res){
        const id = req.params.id
        User.findByIdAndUpdate({_id:id},{$set:req.body},{new: true}).then(
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
   create(req, res){
        let{fname,lname,email,phone, gender,dlNo,password, createdAt}= req.body;
        if(!fname){
            return res.status(400).json({ err:"first name is required."});
        }
        if(!lname){
            return res.status(400).json({ err:"last name is required."});
        }
        if (!email) {
            return res.status(400).json({err:"email is required."});
        }
        if (!phone) {
            return res.status(400).json({err:"phone is required."});
        }
        if (!gender) {
            return res.status(400).json({err:"gender is required."});
        }
        if (!dlNo) {
            return res.status(400).json({err:"dlno is required."});
        }
        if (!password) {
            return res.status(400).json({err:"password is required."});
        }
        if (!createdAt) {
            return res.status(400).json({err:"date is required."});
        }
        
    },
    async signup(req, res){
        try {
            const {error, value} = userService.validationSchema(req.body);
            if (error && error.details) {
                return res.status(500).json( error.details );
            }
        await User.create(value)
        .then(customer => res.json(customer))
        .catch(err=> res.status(500).json(err));
        
            console.log(value)
        } catch (error) {
            console.log(error)
        }

    },
    async login(req, res){
        try {
            const {error, value} = userService.validationLoginSchema(req.body);
            if (error && error.details) {
                return res.status(500).json( error.details );
            }
            const user = await User.findOne({email: value.email});
            if(!user){
                return res.status(400).json({err:"Invalid Email"})
            }
            else if(user.password != value.password){
                return res.status(400).json({err:"Invalid Password"})
            }
            else{
                console.log(value)
                return res.json(
                     user
                );
                
            }
            
        } catch (error) {
            console.log(error)
        }

    }

};