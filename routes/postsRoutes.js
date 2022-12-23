import express from "express";
const postsRouter = express.Router();
import {getPosts, createPost, updatePost, deletePost, likePost} from "../controllers/postsControllers.js"

postsRouter.get("/", getPosts);
postsRouter.post("/", createPost);
postsRouter.patch("/:id", updatePost);
postsRouter.delete("/:id", deletePost);
postsRouter.patch("/:id/likePost", likePost)

export default postsRouter;  