import express from "express";
import home from "./home";
import apiDoc from "./apiDoc";
import employee from "./employee";
const routerInstance = express.Router();

const routerVersionOne = (): express.Router => {
  home(routerInstance);
  apiDoc(routerInstance);
  employee(routerInstance);
  return routerInstance;
};

export default routerVersionOne;
