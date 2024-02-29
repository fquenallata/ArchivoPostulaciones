import { Request, Response } from "express";
import { getPostulaciones } from "../controller";

const getPostulacionesHandler = async (req: Request, res: Response) => {
  try {
    const postulaciones = await getPostulaciones();
    res.status(200).json(postulaciones);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export default getPostulacionesHandler;
