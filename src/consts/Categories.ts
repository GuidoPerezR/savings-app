import { CartShopping } from '@/components/icons/CartShopping';
import type { CategoryName } from '@/types/Categories';
import type { IconType } from '@/types/DashboardCards';
import { FoodIcon } from '@/components/icons/FoodIcon';
import { TransportIcon } from '@/components/icons/TransportIcon';
import { HomeIcon } from '@/components/icons/HomeIcon';
import { LeisureIcon } from '@/components/icons/LeisureIcon';
import { HealthIcon } from '@/components/icons/HealthIcon';
import { EducationIcon } from '@/components/icons/EducationIcon';
import { WorkIcon } from '@/components/icons/WorkIcon';
import { GiftIcon } from '@/components/icons/GiftIcon';
import { OthersIcon } from '@/components/icons/OthersIcon';

export const CATEGORY_ICONS: Record<CategoryName, IconType> = {
  Compras: CartShopping,
  Comida: FoodIcon,
  Transporte: TransportIcon,
  Hogar: HomeIcon,
  Ocio: LeisureIcon,
  Salud: HealthIcon,
  Educación: EducationIcon,
  Trabajo: WorkIcon,
  Regalos: GiftIcon,
  Otros: OthersIcon,
};
