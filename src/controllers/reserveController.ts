import { Request, Response } from "express";

export const createReserve = (req: Request, res: Response): void => {
  const { date, hour, email } = req.body;

  if (!date || !hour || !email) {
    res.status(400).json({ message: "Faltan datos" });
    return;
  }

  res
    .status(201)
    .json({
      message: "Reserva creada exitosamente",
      reserve: { date, hour, email },
    });
};
