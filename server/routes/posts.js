//This file is for anything that has to do with posts or uploads
import express from "express";

import auth from "../middleware/auth.js";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);

export default router;
