import type { Category } from '@/types/Categories';
import { use } from 'react';
import { CategoryCard } from './CategoryCard';
import { CATEGORY_ICONS } from '@/consts/Categories';

type CategoriesProps = {
  promise: Promise<Category[]>;
};

export const Categories = ({ promise }: CategoriesProps) => {
  const categories = use(promise);
  return (
    <>
      {categories.map(({ id, name }) => (
        <CategoryCard
          key={id}
          id={id}
          name={name}
          icon={CATEGORY_ICONS[name]}
        />
      ))}
    </>
  );
};
