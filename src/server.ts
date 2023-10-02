import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import path from "path";

import dotenv from "dotenv";
// import connect from "./utils/connect";
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

const PORT = process.env.PORT || 9876;
app.listen(PORT, async () => {
  // await connect(); // Database need to be connected for the Employee API
  logger.info(`Hosting on Port: http://localhost:${PORT}/`);
  logger.info("Server Started.....");
});

app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

const staticDocsFilePath = path.resolve(__dirname, "dist", "docs");
app.use(express.static(staticDocsFilePath));
app.use("/apidoc", (req, res) => {
  return res.sendFile(path.resolve(staticDocsFilePath, "index.html"));
});

app.use("/api/v1", routerVersionOne()); // Version 1

// Static Page for the Website
app.use(express.static("dist"));

// Redirect to the static page if the route not matched
app.get("*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
