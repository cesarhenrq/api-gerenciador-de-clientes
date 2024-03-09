import express from "express";

import cors from "cors";

import connect from "./database";

import routes from "./routes";

connect();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

export default app;
