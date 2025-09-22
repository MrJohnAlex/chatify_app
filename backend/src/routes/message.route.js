import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Send");
});
router.get("/receive", (req, res) => {
  res.send("Received");
});

export default router;
