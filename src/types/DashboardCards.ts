import type { ComponentType, SVGProps } from 'react';

type ColorVariant = 'earning' | 'spending' | 'investing';
export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface DashboardCard {
  title: string;
  icon: IconType;
  amount: number;
  color: ColorVariant;
}
