export type CategoryName =
  | 'Compras'
  | 'Comida'
  | 'Transporte'
  | 'Hogar'
  | 'Ocio'
  | 'Salud'
  | 'Educación'
  | 'Trabajo'
  | 'Regalos'
  | 'Otros';

export type CategoryId = number | null;

export interface Category {
  id: CategoryId;
  name: CategoryName;
  created_at?: string;
  // icon: IconType;
}
