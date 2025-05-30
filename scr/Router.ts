import { Elysia, t } from "elysia"
import { OrderController } from "./controllers/OrderController"

export class Router {
  static orders = new Elysia()
    .post("/create", ({ body }) => OrderController.create(body), {
      body: t.Object({
        title: t.String(),
        price: t.Number()
      })
    })
    .get("/id/:id", ({ params }) => OrderController.getById(params), {
      params: t.Object({
        id: t.Number()
      })
    })
    .get("/all", () => OrderController.getAll())
    .delete("/id/:id", ({ params }) => OrderController.deleteById(params), {
      params: t.Object({
        id: t.Number()
      })
    })
}
