import bcrypt from "bcryptjs";
import  jwt  from 'jsonwebtoken';
import * as sql from '../models/model.js';

export const logear = async (req, res) => {
    const { email, password } = req.body;
    try {
      const findUser = await sql.login({ email });
      
      if (!findUser) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
      }
      
      const isPasswordValid = bcrypt.compareSync(password, findUser.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }
      
      const token = await createToken(email);
      res.status(200).json({
        message: `¡Bienvenido, ${email}! Has iniciado sesión correctamente.`,
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  
  
  const createToken = async (email) => {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h', 
    });
    return token;
  };

  //  JWT_SECRET=PRUEBAJWT