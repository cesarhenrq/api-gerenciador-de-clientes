import dotenv from "dotenv";
dotenv.config();

export default {
  database: {
    user: process.env.DB_USER as string,
    host: process.env.DB_HOST as string,
    database: process.env.DB_NAME as string,
    password: process.env.DB_PASSWORD as string,
    port: process.env.DB_PORT as unknown as number,
  },
  server: {
    port: process.env.SERVER_PORT,
  },
};
