const express = require('express')
import vehicleController from './vehicle.controller'
export const vehicleRouter = express.Router();

// userRouter.post('/signup',vehicleController.signup)
// userRouter.post('/login',vehicleController.login)

vehicleRouter.route('/')
.post(vehicleController.create)
.get(vehicleController.findAll)

vehicleRouter.route('/:id')
.get(vehicleController.findOne)
.delete(vehicleController.delete)
.put(vehicleController.update)