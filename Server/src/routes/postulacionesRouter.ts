import { Router } from "express";
import getPostulacionesHandler from "../handlers/userHandler";

const postulacionesRouter = Router();

postulacionesRouter.get("/", getPostulacionesHandler);
// postulacionesRouter.post("/", postPostulaciones);
// postulacionesRouter.update("/", updatePostulaciones);
// postulacionesRouter.delete("/", deletePostulaciones);

export default postulacionesRouter;
