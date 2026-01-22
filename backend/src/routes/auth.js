import express from "express";

export const authRouter = express.Router();

authRouter.post("/login", (req, res) => {
  res.json({
    token: "demo-token",
    user: {
      id: "admin",
      name: "Admin",
      role: "admin"
    }
  });
});
