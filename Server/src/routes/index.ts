import { Router } from "express";
import postulacionesRouter from "./postulacionesRouter";

const router = Router();
router.use("/postulaciones", postulacionesRouter);

export default router;
