import * as sql from '../models/model.js';

export const getProfile = async (req, res) => {
  try {

    const { email } = req.user;
    const userData = await sql.getProfile({ email });
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error al obtener perfil:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

//segun veo el codigo para hacer funcionar el get necesito ya tener resuelto el caso del middleware para autentificar e token pero sinceramente me supera