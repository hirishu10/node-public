import express from "express";
import yFinanceController from "../controllers/yFinanceController";

const yFinance = (router: express.Router) => {
  router.post("/yfinance", yFinanceController);
};

export default yFinance;
