import { Request, Response } from "express";

import ClientsService from "../services/clients.service";

import IQuery from "../../../utils/query";

export default class ClientsController {
  constructor(private service: ClientsService) {}

  async findAll(req: Request, res: Response) {
    const { query } = req;

    const result = await this.service.findAll(query as IQuery);

    res.status(result.status).json(result);
  }
}
