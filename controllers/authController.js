import User from "../models/User.js";
import { validationResult } from "express-validator";

class AuthController {
  async login(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Login error, username can't be empty..",
          errors,
        });
      }

      const { username } = req.body;
      const candidate = await User.findOne({ username });

      if (!candidate) {
        const user = new User({
          username,
        });

        await user.save();
        return res.json(user);
      } else {
        await User.updateOne(
          { username: candidate.username },
          {
            $set: {
              dateOfLastEnter: Date.now(),
            },
          }
        );
        return res.json(candidate);
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Whoops..login error" });
    }
  }

  async getCurrentUser(req, res) {
    try {
      const { username } = req.body;
      const candidate = await User.findOne({ username });

      if (!candidate) {
        return res
          .status(400)
          .json({ message: "Whoops.. cant find a user with dat name" });
      }

      return res.json(candidate);
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find();

      return res.json(users);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthController();
