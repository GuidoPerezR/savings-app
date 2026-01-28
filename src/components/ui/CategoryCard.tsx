import type { Category } from '@/types/Categories';
import type { IconType } from '@/types/DashboardCards';
import { useCategoriesStore } from '@/store/categories';

type CategoryCardProps = {
  id: Category['id'];
  name: Category['name'];
  icon: IconType;
};

export const CategoryCard = ({ id, name, icon: Icon }: CategoryCardProps) => {
  const setSelectedCategoryId = useCategoriesStore(
    (state) => state.setSelectedCategoryId,
  );
  const selectedCategoryId = useCategoriesStore(
    (state) => state.selectedCategoryId,
  );

  const isSelected =
    selectedCategoryId === id
      ? 'bg-primary text-light'
      : 'bg-navbar text-light/70';

  return (
    <button
      className={`flex flex-col items-center justify-center rounded-xl p-3 ${isSelected}`}
      type="button"
      onClick={() => setSelectedCategoryId(id)}
    >
      <Icon className="mb-1 size-5" />
      <span className="text-xs">{name}</span>
    </button>
  );
};
