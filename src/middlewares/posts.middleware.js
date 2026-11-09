import { selectById } from "../models/posts.model.js";

const checkId = async (req, res, next) => {
    const { idPost } = req.params;

    const post = await selectById(idPost);
    if (!post) {
        return res.status(404).json({
            message: "No existe un post con ese ID"
        });
    }

    req.post = post;
    next();
};

export {
    checkId
};
