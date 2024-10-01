import { Router } from "express";
import { createReserve } from "../controllers/reserveController";

const router = Router();

router.post("/reserve", createReserve);

export default router;
