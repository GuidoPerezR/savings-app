import type { DashboardCard } from '../types/DashboardCards';
import { ArrowUp } from '@/components/icons/ArrowUp';
import { ArrowDown } from '@/components/icons/ArrowDown';
import { ChartLine } from '@/components/icons/ChartLine';
import { SavesPig } from '@/components/icons/SavesPig';

export const DASHBOARD_CARDS: DashboardCard[] = [
  {
    title: 'Ganancia Total',
    icon: ArrowUp,
    color: 'earning',
    inputName: 'total_earnings',
  },
  {
    title: 'Gasto Total',
    icon: ArrowDown,
    inputName: 'total_spendings',
    color: 'spending',
  },
  {
    title: 'Total Invertido',
    icon: ChartLine,
    color: 'investing',
    inputName: 'total_invested',
  },
  {
    title: 'Ahorro Personal',
    icon: SavesPig,
    color: 'earning',
    inputName: 'total_savings',
  },
];
