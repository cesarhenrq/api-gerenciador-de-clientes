import { Pool, QueryResult, PoolClient } from "pg";

import settings from "../app/configs/settings";

declare global {
  var connection: Pool;
}

async function connect(): Promise<PoolClient> {
  if (global.connection)
    return global.connection.connect() as Promise<PoolClient>;

  const pool = new Pool(settings.database);

  try {
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");

    const res: QueryResult = await client.query("SELECT NOW()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
    throw error;
  }
}

export default connect;
