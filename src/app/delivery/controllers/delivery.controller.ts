import { Request, Response } from "express";

import DeliveryService from "../services/delivery.service";

export default class DeliveryController {
  constructor(private service: DeliveryService) {}

  async calculateRoute(_req: Request, res: Response) {
    const result = await this.service.calculateRoute();

    res.status(result.status).json(result);
  }
}
