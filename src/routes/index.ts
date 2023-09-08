import { Router } from "express";

const router = Router();




import * as moduleNews from './news'; 
import * as moduleBlog from './blog';
import * as moduleAuth from './auth';
import * as moduleOrder from './order'
import * as moduleStorage from './upload';

router.use('/news', moduleNews.router);
router.use('/blog', moduleBlog.router);
router.use('/auth', moduleAuth.router);
router.use('/order', moduleOrder.router);
router.use('/upload', moduleStorage.router);

export { router };
