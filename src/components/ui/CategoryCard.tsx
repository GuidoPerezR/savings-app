import type { Category } from '@/types/Categories';

type CategoryCardProps = Omit<Category, 'id'>;

export const CategoryCard = ({ name, icon: Icon }: CategoryCardProps) => {
  return (
    <button
      className="flex flex-col items-center justify-center rounded-xl bg-navbar p-3 text-light/70"
      type="button"
    >
      <Icon className="mb-1 size-5" />
      <span className="text-xs">{name}</span>
    </button>
  );
};
