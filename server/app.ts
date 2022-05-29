import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4440;
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server2 and try again");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at localhost:${port}`);
});
