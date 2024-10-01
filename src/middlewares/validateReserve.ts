import { Request, Response, NextFunction } from "express";

export const validateReserve = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { date, hour, email } = req.body;

  if (!date || !hour || email) {
    res.status(400).json({ message: "Faltan datos " });
  }

  next();
};
