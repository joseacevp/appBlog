import { insert, selectAll, selectById } from "../models/autores.model.js";
import { selectByAutorId } from "../models/posts.model.js";

const getAll = async (req, res) => {
    const autores = await selectAll();
    res.json(autores);
};

const getById = async (req, res) => {
    res.json(req.autor);
};

const getPosts = async (req, res) => {
    const { idAutor } = req.params;
    const posts = await selectByAutorId(idAutor);
    res.json(posts);
};

const create = async (req, res) => {
    const { nombre, email } = req.body;

    if (!nombre || !email) {
        return res.status(400).json({
            message: "nombre y email son obligatorios"
        });
    }

    const result = await insert(req.body);
    const autor = await selectById(result.insertId);
    res.status(201).json(autor);
};

export {
    getAll,
    getById,
    getPosts,
    create
};
