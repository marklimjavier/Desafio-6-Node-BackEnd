import * as sql from '../models/model.js';


export const registrar = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;
    const nuevoUsuario = await sql.registro({ email, password, rol, lenguage });
    res.status(201).json({ user: nuevoUsuario });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
    
