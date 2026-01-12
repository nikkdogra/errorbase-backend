import dotenv from "dotenv";

dotenv.config();

const envConfig = Object.freeze({
  EXPRESS_PORT: process.env.EXPRESS_PORT || 8080,
});

export default envConfig;
