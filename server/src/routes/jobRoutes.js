import { Router } from 'express';
import { registrar } from '../controllers/registerControllers.js';
import { validarRegistro } from '../middleware/validadorRegistro.js';
import { logear } from '../controllers/logincontroller.js';
import { isLogin } from '../middleware/jwtverificador.js'; 
import { getProfile } from '../controllers/profileController.js';

const miRuta = Router();

miRuta.post('/usuarios', validarRegistro, registrar);
miRuta.post('/login', logear); 
miRuta.get('/usuarios', isLogin, getProfile);

export default miRuta;