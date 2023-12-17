/*const jwt =require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const expressAsyncHandler = require('express-async-handler')


const User= require('../models/userModel.js')

// desc register new user
// route POST /api/users
// access Public
const registerUser =expressAsyncHandler(async (req, res) => {

    const{name,email,password}= req.body
    if(!name||!email||!password){

        res.status(400) 
        throw new Error('Please add all fields')
    }

    // CHeck if user exists

    const userExists= await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User Exists')
    }

    //Hash password
    const salt= await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create User
    const user =await User.create({
        name,
        email,password:hashedPassword

    })

    if  (user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token: generateToken(user._id)
        })
    }

    else{
        res.status(400)
        throw new Error("Invalid user Data")
    }

    res.json({message: 'Register User'})
})


// desc Authentic a user/login
// route POST /api/users
// access Public
const loginUser =expressAsyncHandler(async (req, res) => {
     const{email,password}=req.body
     
     //check for email
     const user =await User.findOne({email})

     if(user&&(await bcrypt.compare(password,user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token: generateToken(user._id)
        })
        }else{
            res.status(400)
            throw new Error('Invalid creds')
        }
     

    res.json({message: 'Login  User'})
})


// @desc get user dta
// route POST /api/users/me
// access Private
const getMe = expressAsyncHandler(async (req, res) => {
    try {
        const{ _id,name,email}= await User.findById(req.user.id)

        res.status(200).json({
            id:_id,
            name,
            email,



        })
  
      res.json({ message: 'User Data Display'});
    } catch (error) {
      // Handle the error and send a response
      console.error('Error in getMe:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
})
//Generate JWT
const generateToken =(id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
};
*/
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// desc register new user
// route POST /api/users
// access Public
const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  // Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User Exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user Data');
  }

  res.json({ message: 'Register User' });
});

// desc Authentic a user/login
// route POST /api/users
// access Public
const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid creds');
  }

  res.json({ message: 'Login User' });
});

// @desc get user data
// route POST /api/users/me
// access Private
const getMe = expressAsyncHandler(async (req, res) => {
  try {
    const { _id, name, email } = await User.findById(req.user.id);

    res.status(200).json({
      id: _id,
      name,
      email,
    });

    res.json({ message: 'User Data Display' });
  } catch (error) {
    // Handle the error and send a response
    console.error('Error in getMe:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export { registerUser, loginUser, getMe };
