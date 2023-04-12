import express from "express";
import { BaseController } from "./controllers/abstractions/base-controller";

class App {
  public app: express.Application;
  public port: number | string;

  constructor(controllers: BaseController[], port: number | string) {
    this.app = express();
    this.port = port;

    this.initializeMiddleware();
    this.initializeController(controllers);
  }

  private initializeMiddleware() {
    this.app.use(express.json());
  }

  private initializeController(controllers: BaseController[]) {
    this.app.get("/", (req, res) => {
      res.send("App is running.");
    });
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}

export default App;
