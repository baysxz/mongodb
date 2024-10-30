import mongoose from "mongoose";
import UserModel from "../model/user";
import { Request, Response } from "express";

export const CreateUser = async (req: Request, res: Response) => {
  const { email, firstName, password, phoneNumber, role } = req.body;
  try {
    const user = await new UserModel({
      email: email,
      firstName: firstName,
      password: password,
      phoneNumber: phoneNumber,
      role: role,
    }).save();

    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};

export const GetUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json({ users: users });
  } catch (error) {
    res.json({ message: error });
  }
};

export const GetUser = async (req: Request, res: Response) => {
  const { id } = req.body;
  console.log(req.body);
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);
    console.log(req.body);
    const user = await UserModel.findById({ _id: objectId });
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};

export const UpdateUser = async (req: Request, res: Response) => {
  const { id, email } = req.body;
  try {
    const objectId = mongoose.Types.ObjectId.createFromHexString(id);

    const user = await UserModel.findOneAndUpdate(
      { _id: objectId },
      { email: email },
      {
        new: true,
      }
    );
    res.json({ user: user });
  } catch (error) {
    res.json({ message: error });
  }
};
