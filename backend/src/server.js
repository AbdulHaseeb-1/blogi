import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { postsRouter } from "./routes/posts.js";
import { mediaRouter } from "./routes/media.js";
import { authRouter } from "./routes/auth.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/auth", authRouter);
app.use("/api/posts", postsRouter);
app.use("/api/media", mediaRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

app.listen(port, () => {
  console.log(`Blogi API listening on :${port}`);
});
