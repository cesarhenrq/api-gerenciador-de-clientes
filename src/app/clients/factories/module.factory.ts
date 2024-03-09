import ClientsController from "../controllers/clients.controller";
import ClientsRepository from "../repositories/clients.repository";
import ClientsService from "../services/clients.service";

export default class ClientsModule {
  static create() {
    const repository = new ClientsRepository();
    const service = new ClientsService(repository);
    const controller = new ClientsController(service);

    return controller;
  }
}
