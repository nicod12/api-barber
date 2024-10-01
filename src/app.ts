import express from "express";
import cors from "cors";
import reserveRoutes from "./routes/reserveRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", reserveRoutes);

export default app;
