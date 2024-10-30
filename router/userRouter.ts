import express from "express";
import {
  CreateUser,
  GetUser,
  GetUsers,
  UpdateUser,
} from "../controller/userController";

export const UserRouter = express.Router();

UserRouter.post("/createUser", CreateUser)
  .get("/getUsers", GetUsers)
  .get("/getUser", GetUser)
  .put("/updateUser", UpdateUser);
