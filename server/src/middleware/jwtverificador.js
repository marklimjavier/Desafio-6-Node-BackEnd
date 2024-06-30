import jwt from 'jsonwebtoken';

const validateToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Token no válido');
  }
};

const isLogin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; 
    
    if (!authHeader) {
      throw new Error('Token no proporcionado');
    }

    const tokenParts = authHeader.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      throw new Error('Formato de token inválido');
    }
  
    const token = tokenParts[1];

    const tokenData = await validateToken(token);
    req.user = tokenData; 
    next();
  } catch (error) {
    console.error('Error en isLogin:', error);
    return res.status(401).json({ error: error.message || 'Token no proporcionado o inválido' });
  }
};

export { validateToken, isLogin };

//mi codigo de verificador no funciona pero sinceramente ya no tengo cabeza para encontrar la respuesta me tocara comerme este punto y esperar a la auditoria 