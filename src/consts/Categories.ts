import { CartShopping } from '@/components/icons/CartShopping';
import type { CategoryName } from '@/types/Categories';
import type { IconType } from '@/types/DashboardCards';
import { PlusIcon } from '@/components/icons/Plus';

export const CATEGORY_ICONS: Record<CategoryName, IconType> = {
  Compras: CartShopping,
  Comida: PlusIcon,
  Transporte: CartShopping,
  Hogar: CartShopping,
  Ocio: CartShopping,
  Salud: CartShopping,
  Educación: CartShopping,
  Trabajo: CartShopping,
  Regalos: CartShopping,
  Otros: CartShopping,
};
