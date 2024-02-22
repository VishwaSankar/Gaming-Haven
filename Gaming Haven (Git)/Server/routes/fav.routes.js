import express from 'express'

import { verifyToken } from '../middleware/jwt.js';
import { addtofav, deletefav, getfavs } from '../controller/fav.controller.js';


const router=express.Router();

router.post("/",verifyToken,addtofav)
router.delete("/:id",verifyToken,deletefav)
// router.get("/single/:id",verifyToken,getfav)
router.get('/userfav',verifyToken,getfavs)

export default router;