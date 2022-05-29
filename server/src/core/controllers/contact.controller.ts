import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as contactService from "../services/contact.service";

export async function getContacts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await contactService.getContacts();
    console.log("r-->", response);
    res.send({
      status: StatusCodes.OK,
      data: response,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
