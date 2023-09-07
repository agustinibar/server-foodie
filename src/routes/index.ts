import { Router } from "express";

const router = Router();




import * as moduleNews from './news'; 
import * as moduleBlog from './blog';
import * as moduleAuth from './auth'

router.use('/news', moduleNews.router);
router.use('/blog', moduleBlog.router);
router.use('/auth', moduleAuth.router)

export { router };
