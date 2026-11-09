import { Router } from "express";

import { create, getAll, getById, getPosts } from "../controllers/autores.controller.js";
import { checkId } from "../middlewares/autores.middleware.js";

const router = Router();

router.get("/", getAll);
router.get("/:idAutor/posts", checkId, getPosts);
router.get("/:idAutor", checkId, getById);
router.post("/", create);

export default router;


