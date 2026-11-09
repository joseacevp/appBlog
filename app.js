import express from "express";
import cors from "cors";

import apiRoutes from "./src/routes/api.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", apiRoutes);

app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

export default app;
