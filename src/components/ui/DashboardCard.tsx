import type { DashboardCard } from '@/types/DashboardCards';
import { DashboardArticle } from './DashboardArticle';
import { InputData } from './InputData';

const variantColors = {
  earning: 'bg-green-500/10 text-earning',
  spending: 'bg-red-600/10 text-spending',
  investing: 'bg-blue-500/10 text-investing',
};

export function DashboardCard({
  title,
  icon: Icon,
  color,
  inputName,
}: DashboardCard) {
  return (
    <DashboardArticle>
      <div className="flex flex-col gap-2">
        <div
          className={`flex w-fit items-center rounded-full p-2 ${variantColors[color]}`}
        >
          <Icon className="size-6" />
        </div>
        <h3 className="text-sm text-light/80">{title}</h3>
      </div>
      <InputData name={inputName} style={'sm'} />
    </DashboardArticle>
  );
}
