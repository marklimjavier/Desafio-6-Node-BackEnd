import ERRORS from  "../helpers/errors.js";
import dotenv from 'dotenv';

dotenv.findError()

const findError = (code) => {
  return ERRORS.filter((err) => err.code == code);
}

export { findError }

//disculpe profe se que debia utilizarlo para poder asignar los errores mas faciles pero aun me falta una actividad y no puse este codigo en practica pero ya tengo idea de su uso