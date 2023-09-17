import express from "express";
import apiDocController from "../controllers/apiDocController";

const apiDoc = (router: express.Router) => {
  router.get("/apidoc", apiDocController);
};

export default apiDoc;
