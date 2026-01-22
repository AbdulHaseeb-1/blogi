import express from "express";
import { store } from "../services/store.js";

export const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  const posts = store.listPosts();
  res.json({ data: posts });
});

postsRouter.get("/:id", (req, res) => {
  const post = store.getPost(req.params.id);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json({ data: post });
});

postsRouter.post("/", (req, res) => {
  const post = store.createPost(req.body);
  res.status(201).json({ data: post });
});

postsRouter.put("/:id", (req, res) => {
  const post = store.updatePost(req.params.id, req.body);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json({ data: post });
});

postsRouter.delete("/:id", (req, res) => {
  const deleted = store.removePost(req.params.id);
  if (!deleted) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.status(204).send();
});
