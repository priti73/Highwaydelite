const path= require('path');

const express=require('express');
const otpcontroller=require('../controllers/otp');
const validateotpcontroller=require('../controllers/validateotp');


const auntheticateController=require('../middleware/auth');

const router=express.Router();

router.post('/otp',auntheticateController.authenticate,otpcontroller.verifyotp);
router.post('/validateotp/:email',validateotpcontroller.validateotp);
module.exports=router;
