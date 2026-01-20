import type { ComponentType, SVGProps } from 'react';

type ColorVariant = 'earning' | 'spending' | 'investing';
type InputName =
  | 'total_earnings'
  | 'total_spendings'
  | 'total_invested'
  | 'total_savings';
export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface DashboardCard {
  title: string;
  icon: IconType;
  color: ColorVariant;
  inputName: InputName;
}
