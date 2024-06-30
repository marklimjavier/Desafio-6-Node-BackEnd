import * as sql from '../models/model.js';

const validarRegistro = async (req, res, next) => {
    const { email, password, rol, lenguage } = req.body;

    if (!email || !password || !rol || !lenguage) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    try {
        const user = await sql.login({ email });
        if (user) {
            return res.status(400).json({ message: 'Correo electrónico ya registrado' });
        }
        next();

    } catch (error) {
        console.error("Error al verificar el correo electrónico:", error);
        return res.status(500).json({ error: "Error interno al verificar el correo electrónico" });
    }
}

export { validarRegistro };