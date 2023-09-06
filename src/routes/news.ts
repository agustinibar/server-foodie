import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response)=>{
    res.send('This route must get all news')
});

export { router }