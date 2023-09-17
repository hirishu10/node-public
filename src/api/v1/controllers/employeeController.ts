import { Employee } from "../models/Employee";
import { Request, Response, NextFunction } from "express";

// List of employees
const AllEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await Employee.find();
    return res
      .json({
        response,
      })
      .end();
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "An error occurred",
        error,
      })
      .end();
  } finally {
    next();
  }
};

// List of one Employee
const GetEmployee = async (req: Request, res: Response, next: NextFunction) => {
  const employeeId = req.body.employeeId;
  try {
    const response = await Employee.findById(employeeId);
    return res
      .json({
        response,
      })
      .end();
  } catch (error) {
    return res
      .json({
        message: "An error occurred",
        error,
      })
      .end();
  } finally {
    next();
  }
};

// Add Employee
const AddEmployee = async (req: Request, res: Response, next: NextFunction) => {
  const newEmployee = new Employee({
    name: req.body.name,
    email: req.body.email,
    designation: req.body.designation,
    age: req.body.age,
    phone: req.body.phone,
  });

  try {
    const response = await newEmployee.save({ timestamps: true });
    return res
      .json({
        message: "Employee saved successfully",
        response,
      })
      .end();
  } catch (error) {
    return res
      .json({
        message: "An error occurred while saving the new employee information",
        error,
      })
      .end();
  } finally {
    next();
  }
};

// Update Employee
const UpdateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employeeId = req.body.employeeId;

  const updateData = {
    name: req.body.name,
    email: req.body.email,
    designation: req.body.designation,
    age: req.body.age,
    phone: req.body.phone,
  };

  try {
    const response = await Employee.findByIdAndUpdate(employeeId, {
      $set: updateData,
    });
    return res
      .json({
        message: "Employee Update successfully",
        response,
      })
      .end();
  } catch (error) {
    return res
      .json({
        message: "An error occurred while updating employee information",
        error,
      })
      .end();
  } finally {
    next();
  }
};

// Delete employee
const DeleteEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const employeeId = req.body.employeeId;
  try {
    const response = await Employee.findByIdAndDelete(employeeId);
    return res
      .json({
        message: "Employee Delete successfully",
        response,
      })
      .end();
  } catch (error) {
    return res
      .json({
        message: "An error occurred while deleting employee information",
        error,
      })
      .end();
  } finally {
    next();
  }
};

export {
  AllEmployee,
  GetEmployee,
  AddEmployee,
  UpdateEmployee,
  DeleteEmployee,
};
