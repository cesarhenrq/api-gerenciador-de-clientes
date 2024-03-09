import ClientsRepository from "../repositories/clients.repository";

import IQuery from "../../../utils/query";

export default class ClientsService {
  constructor(private repository: ClientsRepository) {}

  async findAll(query: IQuery) {
    try {
      const result = await this.repository.findAll(query);

      return {
        status: 200,
        data: result.rows,
        message: "Clientes encontrados com sucesso",
      };
    } catch (error) {
      return {
        status: 500,
        message: "Erro ao buscar clientes",
        data: null,
      };
    }
  }
}
