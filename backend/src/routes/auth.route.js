import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("Singup end point");
});
router.get("/login", (req, res) => {
  res.send("Login end point");
});
router.get("/logout", (req, res) => {
  res.send("Logout end point");
});

export default router;
