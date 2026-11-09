import { Router } from "express";

import postsRoutes from "./posts.routes.js";
import autoresRoutes from "./autores.routes.js";

const router = Router();

router.use("/posts", postsRoutes);
router.use("/autores", autoresRoutes);

router.get("/", (req, res) => {
    res.json({
        message: "PruebaAPI Blog"
    });
});

export default router;
