import db from "../config/db.js";

const selectAll = async () => {
    const [result] = await db.execute("select * from autores");
    return result;
};

const selectById = async (idAutor) => {
    const [result] = await db.execute(
        "select * from autores where id = ?",
        [idAutor]
    );
    if (result.length === 0) {
        return null;
    }
    return result[0];
};

const insert = async ({ nombre, email, imagen }) => {
    const [result] = await db.execute(
        "insert into autores (nombre, email, imagen) values (?, ?, ?)",
        [nombre, email, imagen ?? null]
    );
    return result;
};

export {
    selectAll,
    selectById,
    insert
};
