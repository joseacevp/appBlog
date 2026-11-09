import { Router } from "express";

import { create, getAll, getById } from "../controllers/posts.controller.js";
import { checkId } from "../middlewares/posts.middleware.js";

const router = Router();

router.get("/", getAll);
router.get("/:idPost", checkId, getById);
router.post("/", create);

export default router;
