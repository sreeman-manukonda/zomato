import express from "express";
import {FoodModel} from "../../database/allModels";

const Router = express.Router();

/*
Router         /
Description    Get all the foods in a particular restaurant
parameters     _id
access         public
method         GET
*/

Router.get("/:_id", async(req, res) => {
  try {
    const {_id} = req.params;
    const foods = await FoodModel.find({restaurant: _id});
    return res.json({foods});
  } catch(error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Router         /r
Description    Get all the foods based on particular category
parameters     category
access         public
method         GET
*/

Router.get("/r/:category", async(req, res) => {
  try {
    const {category} = req.params;
    const foods = await FoodModel.find({
      category: {$regex: category, $options: "i"}
    });
    return res.json({foods});
  } catch(error) {
    return res.status(500).json({error: error.message});
  }
});

export default Router;
