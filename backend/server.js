import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import codeRoutes from "./routes/codeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import problemRoutes from "./routes/problemRoutes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: path.resolve(__dirname + "/.env") });

const port = process.env.PORT || 7000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/codes", codeRoutes);

app.use('/api/users', userRoutes);

app.use("/api/problems", problemRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
