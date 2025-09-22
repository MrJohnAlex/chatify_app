import express from "express";
import dotenv from "dotenv";
import router from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
const app = express();
dotenv.config();
app.use("/api/auth", router);
app.use("/api/messages", messageRoute);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
