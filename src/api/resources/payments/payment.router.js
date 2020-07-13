const express = require('express')
import paymentController  from "./payment.controller";
export const paymentRouter = express.Router();

// userRouter.post('/signup',vehicleController.signup)
// userRouter.post('/login',vehicleController.login)

paymentRouter.route('/')
.post(paymentController.create)
.get(paymentController.findAll)

paymentRouter.route('/:id')
.get(paymentController.findOne)
.delete(paymentController.delete)
.put(paymentController.update)