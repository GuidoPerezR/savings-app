import type { DashboardCard } from '../types/DashboardCards';
import { ArrowUp } from '@/components/icons/ArrowUp';
import { ArrowDown } from '@/components/icons/ArrowDown';
import { ChartLine } from '@/components/icons/ChartLine';
import { SavesPig } from '@/components/icons/SavesPig';

export const DASHBOARD_CARDS: DashboardCard[] = [
  {
    title: 'Ganancia Total',
    icon: ArrowUp,
    amount: 12345.67,
    color: 'earning',
  },
  {
    title: 'Gasto Total',
    icon: ArrowDown,
    amount: 6789.01,
    color: 'spending',
  },
  {
    title: 'Total Invertido',
    icon: ChartLine,
    amount: 5555.55,
    color: 'investing',
  },
  {
    title: 'Ahorro Personal',
    icon: SavesPig,
    amount: 4444.44,
    color: 'earning',
  },
];
