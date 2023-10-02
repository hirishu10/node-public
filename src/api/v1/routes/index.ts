import express from "express";
import home from "./home";
import employee from "./employee";
import yFinance from "./yfinance";
const routerInstance = express.Router();

const routerVersionOne = (): express.Router => {
  home(routerInstance);
  employee(routerInstance);
  yFinance(routerInstance);
  return routerInstance;
};

export default routerVersionOne;
