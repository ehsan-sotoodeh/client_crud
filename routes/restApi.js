import express from "express";
import clientRouter from "./clientRouter";

//import authRouter  from './authRouter';

const app = express();
app.use("/client/", clientRouter);
//app.use("/auth/", authRouter);

module.exports = app;
