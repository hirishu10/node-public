import express from "express";

const apiDocController = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.method === "GET") {
    return res
      .status(200)
      .json({
        message: "Hello World!",
      })
      .end();
  } else {
    return res
      .status(404)
      .json({
        message: "Invalid Method use GET",
      })
      .end();
  }

  next();
};

export default apiDocController;
