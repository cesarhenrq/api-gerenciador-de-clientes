import DeliveryController from "../controllers/delivery.controller";
import DeliveryRepository from "../repositories/delivery.repository";
import DeliveryService from "../services/delivery.service";

export default class DeliveryModule {
  static create() {
    const repository = new DeliveryRepository();
    const service = new DeliveryService(repository);
    const controller = new DeliveryController(service);

    return controller;
  }
}
