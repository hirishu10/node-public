import express from "express";
import homeController from "../controllers/homeController";

const home = (router: express.Router) => {
  /**
   * @api {get} /home Home page
   * @apiVersion 0.0.0
   * @apiName Home
   * @apiGroup Home
   *
   */
  router.get("/home", homeController);
};

export default home;
