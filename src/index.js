import app from "./app";
import "./db";
import { config as dotenv } from "dotenv";
dotenv();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo ---> http://localhost:${PORT}`);
});
