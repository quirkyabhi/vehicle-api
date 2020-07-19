const express = require('express')
import vehicleController from './vehicle.controller'
export const vehicleRouter = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'src/uploads');
    },
    filename: function (req, file, cb){
        cb(null,file.originalname);
    }
});
const fileFilter= (req, file, cb)=>{
    if (file.mimetype==='image/png' || file.mimetype==='image/jpeg'){
        cb(null, true)
    }else {
        cb(null,false)
    }
};

const upload = multer({
    storage: storage,
    fileFIlter: fileFilter
});

// userRouter.post('/signup',vehicleController.signup)
// userRouter.post('/login',vehicleController.login)

vehicleRouter.route('/')
.post(vehicleController.create)
.get(vehicleController.findAll)

vehicleRouter.route('/:id')
.get(vehicleController.findOne)
.delete(vehicleController.delete)
.put(upload.single('url'),vehicleController.update)