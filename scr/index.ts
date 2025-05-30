import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import cors from "@elysiajs/cors";
import dotenv from "dotenv";
import { Router } from "./Router";

class API {
  private app = new Elysia({ adapter: node() });

  constructor() {
    dotenv.config();
    this.useMiddlewares();
    this.useRoutes();
    this.init();
  }

  private useMiddlewares() {
    this.app.use(cors());
  }

  private useRoutes() {
    this.app.group("/api", (app) => app.use(Router.orders));
    this.app.group("/orders", (app) => app.use(Router.orders))
  }

  async init() {
    this.app.listen(process.env.PORT || 5000);
    console.log(`Server is running at http://localhost:${process.env.PORT || 5000}`);
  }
}

new API();
