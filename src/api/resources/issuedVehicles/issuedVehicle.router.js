const express = require('express')
import issuedVehicleController from './issuedVehicle.controller'
export const issuedVehicleRouter = express.Router();

// userRouter.post('/signup',vehicleController.signup)
// userRouter.post('/login',vehicleController.login)

issuedVehicleRouter.route('/')
.post(issuedVehicleController.create)
.get(issuedVehicleController.findAll)

issuedVehicleRouter.route('/:id')
.get(issuedVehicleController.findOne)
.delete(issuedVehicleController.delete)
.put(issuedVehicleController.update)