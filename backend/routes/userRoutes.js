/*const express= require('express')
const router = express.Router()
const { registerUser, loginUser, getMe} = require('../controllers/userControllers')

const{ protect } = require('../middleware/authMiddleware')

router.post('/',registerUser)

router.post('/login',loginUser)

router.get('/me',protect,getMe)

module.exports= router;

;*/

// userRoutes.js

import express from 'express';
const router = express.Router();
import { registerUser, loginUser, getMe } from '../controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);

router.post('/login', loginUser);

router.get('/me', protect, getMe);

export default router;

