import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "./logger";

dotenv.config();
const connect = async () => {
  try {
    const dataBase = await mongoose.connect(process.env.MONGO_URL as string);

    dataBase.connection.on("error", (error: Error) => {
      logger.debug(error);
    });

    dataBase.connection.once("open", () => {
      logger.debug("Database connected!");
    });
  } catch (error) {
    logger.debug(error);
    process.exit(1);
  }
};

export default connect;
