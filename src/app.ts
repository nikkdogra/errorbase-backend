import express from "express";
import cors from "cors";
import envConfig from "./configs";

const PORT = Number(envConfig.EXPRESS_PORT);

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});
app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
    environment: process.env.NODE_ENV,
  });
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  }
);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
