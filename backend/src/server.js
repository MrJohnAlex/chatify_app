import express from "express";
import dotenv from "dotenv";
import path from "path";

import router from "./routes/auth.route.js";
import messageRoute from "./routes/message.route.js";
const app = express();
dotenv.config();
const __dirname = path.resolve();

app.use("/api/auth", router);
app.use("/api/messages", messageRoute);
const port = process.env.PORT || 3000;

// ready for deployment

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
