import { postgressTabla } from "../database/config.js";
import bcrypt from "bcryptjs";



export const registro = async ({ email, password, rol, lenguage }) => {
  const encriptarClave = bcrypt.hashSync(password, 10);
  const registroSql = {
    text: 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *;',
    values: [email, encriptarClave, rol, lenguage]
  };
  try {
    const resultado = await postgressTabla(registroSql.text, registroSql.values);
    return resultado[0]; 
  } catch (error) {
    throw error;
  }
};
export const login = async ({ email }) => {
  try {
    const loginSql = {
      text: 'SELECT * FROM usuarios WHERE email = $1;',
      values: [email]
    };
    const result = await postgressTabla(loginSql.text, loginSql.values);
    return result[0]; 
  } catch (error) {
    throw error;
  }
};

export const getProfile = async (email) => {
  try {
    const profileSql = {
      text: 'SELECT email, rol, lenguage FROM usuarios WHERE email = $1;',
      values: [email]
    };
    const result = await postgressTabla(profileSql.text, profileSql.values);
    return result[0]; 
  } catch (error) {
    throw error;
  }
};