import { Router } from "express";
import { getItemsOrder } from "../controllers/order";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get(('/'), checkJwt, getItemsOrder);

export { router };