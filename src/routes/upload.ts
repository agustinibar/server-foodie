import { Router } from "express";
import { getFile } from "../controllers/file";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get('/', checkJwt, multerMiddleware.single("myfile"),getFile);

export { router }