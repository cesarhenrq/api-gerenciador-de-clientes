import { Router } from "express";

const deliveryRouter = Router();

import DeliveryModule from "../app/delivery/factories/module.factory";

const deliveryController = DeliveryModule.create();

deliveryRouter.get(
  "/",
  deliveryController.calculateRoute.bind(deliveryController)
);

export default deliveryRouter;
