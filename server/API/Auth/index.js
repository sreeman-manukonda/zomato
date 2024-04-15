import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import passport from "passport";

const Router = express.Router();

//Models
import {UserModel} from "../../database/user";

/*
Router         /signup
Description    signup with email & password
parameters     none
access         public
method         POST
*/

Router.post("/signup", async(req, res) => {
  try{
    await UserModel.findEmailAndPhone(req.body.credentials);
    //DB
    const newUser = await UserModel.create(req.body.credentials);
    //JWT Authorization Token
    const token = newUser.generateJwtToken;
    return res.status(200).json({token});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Router         /signin
Description    signin with email & password
parameters     none
access         public
method         POST
*/

Router.post("/signin", async(req, res) => {
  try{
    //doesUserExit
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    return res.status(200).json({status:"success"});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

export default Router;
