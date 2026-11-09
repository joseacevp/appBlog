import db from "../config/db.js";

const POST_SELECT = `
    select
        p.id,
        p.titulo,
        p.descripcion,
        p.fecha_creacion,
        p.categoria,
        a.id as autor_id,
        a.nombre as autor_nombre,
        a.email as autor_email,
        a.imagen as autor_imagen
    from posts p
    inner join autores a on a.id = p.autor_id
`;

const mapPost = (row) => ({
    id: row.id,
    titulo: row.titulo,
    descripcion: row.descripcion,
    fecha_creacion: row.fecha_creacion,
    categoria: row.categoria,
    autor: {
        id: row.autor_id,
        nombre: row.autor_nombre,
        email: row.autor_email,
        imagen: row.autor_imagen
    }
});

const selectAll = async () => {
    const [result] = await db.execute(`${POST_SELECT} order by p.fecha_creacion desc`);
    return result.map(mapPost);
};

const selectById = async (idPost) => {
    const [result] = await db.execute(
        `${POST_SELECT} where p.id = ?`,
        [idPost]
    );
    if (result.length === 0) {
        return null;
    }
    return mapPost(result[0]);
};

const selectByAutorId = async (idAutor) => {
    const [result] = await db.execute(
        `${POST_SELECT} where p.autor_id = ? order by p.fecha_creacion desc`,
        [idAutor]
    );
    return result.map(mapPost);
};

const insert = async ({ titulo, descripcion, fecha_creacion, categoria, autor_id }) => {
    const [result] = await db.execute(
        "insert into posts (titulo, descripcion, fecha_creacion, categoria, autor_id) values (?, ?, ?, ?, ?)",
        [titulo, descripcion, fecha_creacion ?? new Date(), categoria, autor_id]
    );
    return result;
};

export {
    selectAll,
    selectById,
    selectByAutorId,
    insert
};
