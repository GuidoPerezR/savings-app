import type { IconType } from './DashboardCards';

type CategoryName =
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

export interface Category {
  id: number;
  name: CategoryName;
  icon: IconType;
}
