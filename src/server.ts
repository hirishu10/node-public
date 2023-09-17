import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import path from "path";

import dotenv from "dotenv";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routerVersionOne from "./api/v1/routes/index";

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);
const PORT = process.env.PORT || 9876;
server.listen(PORT, async () => {
  await connect();
  logger.info(`Hosting on Port: http://localhost:${PORT}/`);
  logger.info("Server Started.....");
});

app.use("/api/v1", routerVersionOne()); // Version 1

app.use("/apiDoc", (req, res) => {
  console.log("__dirname", __dirname + "/dist/docs/index.html");
  return res.sendFile(__dirname + "/dist/docs/index.html");
});

// Static Page for the Website
if (process.env.NODE_ENV !== "production") {
  app.use(express.static("dist"));

  // Redirect to the static page if the route not matched
  app.get("*", (req, res) => {
    return res.sendFile(path.resolve(__dirname, "dist", "index.html"));
  });
}
