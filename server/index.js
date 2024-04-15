//env
require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
//import passport from "passport";


//Database connection
import ConnectDb from "./database/connection";

//API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Menu from "./API/Menu";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended: false}));
zomato.use(cors());
zomato.use(helmet());
//zomato.use(passport.initialize());
//zomato.use(passport.session());

//For appilication of routes
//localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/menu", Menu);

zomato.get("/", (req, res) => res.json({message: "Setup is done"}));


zomato.listen(4000, () =>
ConnectDb().then(()=>console.log("Server is up & running")).catch(()=>
console.log("DB connection failed"))
);
