import express, { Express } from "express";
import { rollTheDice } from "./dice";
import "dotenv/config";

const PORT: number = Number.parseInt(process.env.PORT || "8080");
const app: Express = express();

app.get("/rolldice", (req, res) => {
  return res.send(JSON.stringify(rollTheDice(12, 1, 6)));
});

app.listen(PORT, () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
