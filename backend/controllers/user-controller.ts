import express from "express";
import { BaseController } from "./abstractions/base-controller";

export default class UserController extends BaseController {
  public path = "/users";

  constructor() {
    super();
    this.initializeRoutes();
  }

  public initializeRoutes(): void {
    this.router.get(this.path, this.getAllUsers);
    this.router.post(this.path, this.addUser);
    this.router.get(this.path + "/:userId", this.getUserById);
  }
  getAllUsers = async (req: express.Request, res: express.Response) => {
    const users = await this.prisma.user.findMany();
    res.json(users);
  };
  addUser = async (req: express.Request, res: express.Response) => {
    try {
      const user = await this.prisma.user.create({
        data: {
          name: req.body.name,
          dob: req.body.dob,
          email: req.body.email,
        },
      });
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  };
  getUserById = async (req: express.Request, res: express.Response) => {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: Number.parseInt(req.params.userId),
        },
      });
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  };
}
