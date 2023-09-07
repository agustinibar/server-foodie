import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, uploadItem } from "../controllers/news";

const router = Router();

router.get("/", getItems);

router.get('/:id', getItem);

router.post('/', postItem);

router.put('/:id', uploadItem)

router.delete('/:id', deleteItem)

export { router };