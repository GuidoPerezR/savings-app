import { email, pipe, string, trim } from 'valibot';

export const EmailSchema = pipe(
  string('El correo electrónico debe ser una cadena de texto'),
  trim(),
  email('El correo electrónico no es válido'),
);
