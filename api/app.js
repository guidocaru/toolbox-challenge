import express, { json } from "express";
import { filesRouter } from "./routes/files.js";
import { corsMiddleware } from "./middlewares/cors.js";

const app = express();
app.use(json());
app.use(corsMiddleware());

app.use("/files", filesRouter);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
