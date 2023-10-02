import express from "express";
import yahooFinance from "yahoo-finance2";

const homeController = async (req: express.Request, res: express.Response) => {
  if (req?.method === "POST") {
    if (req?.body?.company) {
      if (typeof req?.body?.company === "string") {
        try {
          const results = await yahooFinance.quote(req?.body?.company);
          return res.status(200).send(
            results
              ? results
              : {
                  message: `No Data Found regarding ${req?.body?.company} Company`,
                }
          );
        } catch (error) {
          return res.status(500).send({
            message: "Something went wrong",
          });
        }
      } else {
        return res.status(500).send({
          message: "Company name should be string",
        });
      }
    } else {
      return res.status(500).send({
        message: "Please enter valid company name",
      });
    }
  } else {
    return res
      .status(404)
      .json({
        message: "Invalid Method use POST",
      })
      .end();
  }
};

export default homeController;
