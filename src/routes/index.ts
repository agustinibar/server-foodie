import { Router } from "express";

const router = Router();




import * as moduleNews from './news'; 
import * as moduleBlog from './blog';


router.use('/news', moduleNews.router);
router.use('/blog', moduleBlog.router);


export { router };
