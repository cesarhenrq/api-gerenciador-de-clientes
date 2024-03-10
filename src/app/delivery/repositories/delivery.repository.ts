export default class DeliveryRepository {
  constructor() {}

  async findAll() {
    const delivery = await connection.connect();

    let queryString = "SELECT id, name, pos_x, pos_y FROM clients";

    return delivery.query(queryString);
  }
}
