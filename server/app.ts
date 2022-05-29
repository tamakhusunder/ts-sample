import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import routes from "./src/routes/routes";

dotenv.config();
const port = process.env.PORT || 4440;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server2 and try again");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at localhost:${port}`);
});
