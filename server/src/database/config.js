import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DATA_USER, DATA_PASSWORD, DATA_HOST, DATA_PORT, DATA_DATABASE, JWT_SECRET } = process.env;

const dbConfig = {
    user: DATA_USER,
    password: DATA_PASSWORD,
    host: DATA_HOST,
    port: DATA_PORT,
    database: DATA_DATABASE,
    jwtSecret: JWT_SECRET,
    allowExitOnIdle: true
};

const { Pool } = pkg;
const pool = new Pool(dbConfig);

export const postgressTabla = async (query, values) => {
    try {
        const { rows } = await pool.query(query, values);
        return rows;
    } catch (error) {
        const { code, message } = error;
        const customError = { status: false, code, message };
        throw customError;
    }
};