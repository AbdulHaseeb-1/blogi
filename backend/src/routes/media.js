import express from "express";
import multer from "multer";
import { store } from "../services/store.js";

const upload = multer({ storage: multer.memoryStorage() });

export const mediaRouter = express.Router();

mediaRouter.get("/", (req, res) => {
  res.json({ data: store.listMedia() });
});

mediaRouter.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "File is required" });
  }
  const asset = store.createMedia({
    name: req.file.originalname,
    type: req.file.mimetype,
    url: `https://cdn.blogi.dev/media/${req.file.originalname}`,
    size: req.file.size,
    tags: []
  });
  res.status(201).json({ data: asset });
});

mediaRouter.post("/external", (req, res) => {
  const asset = store.createMedia(req.body);
  res.status(201).json({ data: asset });
});
