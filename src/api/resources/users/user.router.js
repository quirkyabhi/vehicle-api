const express = require('express')
import userController from './user.controller'
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

export const userRouter = express.Router();

userRouter.post('/signup',userController.signup)
userRouter.post('/login',userController.login)

userRouter.route('/')
.post(userController.create)
.get(userController.findAll)

userRouter.route('/:id')
.get(userController.findOne)
.delete(userController.detete)
.put(upload.single('url'),userController.update)
    