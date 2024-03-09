import IQuery from "../../../utils/query";

import CreateClientDto from "../dtos/create.dto";

export default class ClientsRepository {
  constructor() {}

  async findAll(query: IQuery) {
    const client = await connection.connect();

    const { name, email, phone } = query;

    let queryString = "SELECT id, name, email, phone FROM clients WHERE 1=1";

    if (name) queryString += ` AND name LIKE '%${name}%'`;
    if (email) queryString += ` AND email LIKE '%${email}%'`;
    if (phone) queryString += ` AND phone LIKE '%${phone}%'`;

    return client.query(queryString);
  }

  async create(data: CreateClientDto) {
    const client = await connection.connect();

    const { name, email, phone } = data;

    const queryString = `INSERT INTO clients (name, email, phone) VALUES ('${name}', '${email}', '${phone}')`;

    return client.query(queryString);
  }
}
