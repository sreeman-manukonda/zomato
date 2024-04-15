import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: {type: String, required: true},
  city: {type: String, required: true},
  address: {type: String, required: true},
  mapLocation: {type: String, required: true},
  contactNumber: [{type: Number, required: true}],
  website:[String],
  restaurantTimings: [String],
  popularDishes: [String],
  cuisine: [String],
  amenities: [String],
  averageCost: Number,
  menuImages: {type: mongoose.Types.ObjectId, ref: "Images"},
  menus: {type: mongoose.Types.ObjectId, ref: "Menus"},
  review: {type: mongoose.Types.ObjectId, ref: "Reviews"},
  photos: {type: mongoose.Types.ObjectId, ref: "Images"}
},
{
  timestamps: true
}
);

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);
