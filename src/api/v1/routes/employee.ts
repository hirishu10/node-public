import express from "express";
import {
  AllEmployee,
  AddEmployee,
  DeleteEmployee,
  GetEmployee,
  UpdateEmployee,
} from "../controllers/employeeController";

const employee = (router: express.Router) => {
  /**
   @api {get} /employee List Of Employees
   @apiVersion 0.0.0
   @apiName List of Employees
   @apiGroup Employee
   @apiSuccessExample Success-Response:
  "response": [
      {
      "_id": "650740a0fa5b76002b07e065",
      "name": "Test Account",
      "designation": "Software Developer",
      "email": "test@yopmail.com",
      "phone": "9843647364",
      "age": 25,
      "createdAt": "2023-09-17T18:08:32.720Z",
      "updatedAt": "2023-09-17T18:08:32.720Z",
      "__v": 0
      }
  ]
   *
   */
  router.get("/employee", AllEmployee);

  /**
   * @api {post} /employee/find Find Employee
   * @apiVersion 0.0.0
   * @apiName Find Employee
   * @apiGroup Employee
   *
   * @apiParam {string} employeeId
   * 
   @apiSuccessExample Success-Response:
      {
      "_id": "650740a0fa5b76002b07e065",
      "name": "Test Account",
      "designation": "Software Developer",
      "email": "test@yopmail.com",
      "phone": "9843647364",
      "age": 25,
      "createdAt": "2023-09-17T18:08:32.720Z",
      "updatedAt": "2023-09-17T18:08:32.720Z",
      "__v": 0
      }
   *
   */
  router.post("/employee/find", GetEmployee);

  /**
   * @api {post} /employee/add Add Employee
   * @apiVersion 0.0.0
   * @apiName Add Employee
   * @apiGroup Employee
   *
   * @apiParam {string} name
   * @apiParam {string} designation
   * @apiParam {string} email
   * @apiParam {string} phone
   * @apiParam {Number} age
   *
   * @apiParamExample {json} Request-Example:
   *   {
   *       "name":"Test Account",
   *       "email":"testOne@yopmail.com",
   *       "designation":"Software Developer",
   *       "age":25,
   *       "phone":"9843647364"
   *    }
   */
  router.post("/employee/add", AddEmployee);
  router.put("/employee/update", UpdateEmployee);
  router.post("/employee/delete", DeleteEmployee);
};

export default employee;
