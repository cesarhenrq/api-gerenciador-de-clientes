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

  async create(req: Request, res: Response) {
    const { body } = req;

    if (!body) {
      return res.status(400).json({
        status: 400,
        message: "Dados inválidos",
        data: null,
      });
    }

    if (!body.name || !body.email || !body.phone) {
      return res.status(400).json({
        status: 400,
        message: "Dados inválidos",
        data: null,
      });
    }

    if (body.name > 155) {
      return res.status(400).json({
        status: 400,
        message: "Nome deve ter no máximo 155 caracteres",
        data: null,
      });
    }

    if (body.email > 155) {
      res.status(400).json({
        status: 400,
        message: "Email deve ter no máximo 155 caracteres",
        data: null,
      });
    }

    if (body.email.indexOf("@") === -1) {
      return res.status(400).json({
        status: 400,
        message: "Email inválido",
        data: null,
      });
    }

    if (body.phone.lenght > 9) {
      return res.status(400).json({
        status: 400,
        message: "Telefone deve ter no máximo 9 caracteres",
        data: null,
      });
    }

    const result = await this.service.create(body);

    res.status(result.status).json(result);
  }
}
