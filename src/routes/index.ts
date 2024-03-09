import { Router } from "express";

import clientsRouter from "./clients.route";

const routes = Router();

routes.use("/clients", clientsRouter);

export default routes;
