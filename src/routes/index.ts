import { Router } from "express";

import clientsRouter from "./clients.route";
import deliveryRouter from "./delivery.route";

const routes = Router();

routes.use("/clients", clientsRouter);

routes.use("/delivery", deliveryRouter);

export default routes;
