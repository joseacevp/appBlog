import { createPool } from "mysql2/promise";

const pool = createPool({
    user: "root",
    password: "blog1234",
    host: "localhost",
    port: 3306,
    database: "blog"
});

export default pool;
