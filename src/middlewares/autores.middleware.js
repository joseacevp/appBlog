import { selectById } from "../models/autores.model.js";

const checkId = async (req, res, next) => {
    const { idAutor } = req.params;

    const autor = await selectById(idAutor);
    if (!autor) {
        return res.status(404).json({
            message: "No existe un autor con ese ID"
        });
    }

    req.autor = autor;
    next();
};

export {
    checkId
};
