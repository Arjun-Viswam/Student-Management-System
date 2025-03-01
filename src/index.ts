import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import database from "./config/database";
import routes from "./routes"

dotenv.config();
database();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
