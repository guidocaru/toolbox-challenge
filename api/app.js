import express, { json } from "express";
import { filesRouter } from "./routes/files.js";

const app = express();
app.use(json());

app.use("/files", filesRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
