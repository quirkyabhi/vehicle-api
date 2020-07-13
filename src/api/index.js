import express from 'express';
import {userRouter} from './resources/users/user.router';
import { vehicleRouter} from './resources/vehicles/vehicle.router'
import {issuedVehicleRouter} from './resources/issuedVehicles/issuedVehicle.router'
import {paymentRouter} from './resources/payments/payment.router'
export const restRouter = express.Router();
restRouter.use('/users',userRouter);
restRouter.use('/vehicles',vehicleRouter)
restRouter.use('/issuedVehicles',issuedVehicleRouter)
restRouter.use('/payments',paymentRouter)