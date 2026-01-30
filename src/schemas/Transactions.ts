import {
  minValue,
  nonEmpty,
  number,
  object,
  pipe,
  string,
  trim,
  uuid,
} from 'valibot';

export const transactionSchema = object({
  title: pipe(
    string('El titulo debe ser una cadena de texto'),
    trim(),
    nonEmpty('El titulo no puede estar vacio'),
  ),
  amount: pipe(
    number('El monto debe ser un número'),
    minValue(0.1, 'El monto debe ser mayor a 0'),
  ),
  type: pipe(
    string('El tipo debe ser una cadena de texto'),
    trim(),
    nonEmpty('El titulo no puede estar vacio'),
  ),
  date: string('La fecha debe ser una cadena de texto'),
  categoryId: pipe(
    number('Selecciona una categoria'),
    minValue(1, 'Selecciona una categoria'),
  ),
  user_id: pipe(string(), uuid('El ID de usuario debe ser un UUID valido')),
});
