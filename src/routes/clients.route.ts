import { Router } from "express";

const clientsRouter = Router();

import ClientsModule from "../app/clients/factories/module.factory";

const clientsController = ClientsModule.create();

clientsRouter.get("/", clientsController.findAll.bind(clientsController));

export default clientsRouter;
