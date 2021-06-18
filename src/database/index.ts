import { Pool } from 'pg';
import "dotenv/config";

const pool = new Pool({ 
    user: process.env.USERNAME_DB,
    host: process.env.HOST_DB,
    database: process.env.DATABASE_DB,
    password: process.env.PASSWORD_DB,
    port: Number(process.env.PORT_DB),
});

export default pool;