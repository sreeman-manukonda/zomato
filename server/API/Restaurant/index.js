import express from "express";
import {RestaurantModel} from "../../database/allModels";

const Router = express.Router();

/*
Router         /
Description    Get all the restaurants in a city
parameters     none
access         public
method         GET
*/

Router.get("/", async(req, res) => {
  try {
    const {city} = req.query;
    const restaurants = await RestaurantModel.find({city});
    return res.json({restaurants});
  } catch(error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Router         /
Description    Get specific restaurant details by id
parameters     _id
access         public
method         GET
*/

Router.get("/:_id", async(req, res) => {
  try {
    const {_id} = req.params;
    const restaurant = await RestaurantModel.findOne({_id});

    if(!restaurant) {
      return res.status(404).json({error: "Restaurant isn't found"});
    }

    return res.json({restaurant});
  } catch(error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Router         /search
Description    Get restaurants by search
parameters     none
body           searchString
access         public
method         GET
*/

Router.get("/search", async(req, res) => {
  try {
    const {searchString} = req.body;
    const restaurants = await RestaurantModel.find({
      name: {$regex: searchString, $options: "i"}
    });
    return res.json({restaurants});
  } catch(error) {
    return res.status(500).json({error: error.message});
  }
});


export default Router;
