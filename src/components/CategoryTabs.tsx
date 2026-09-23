import { ROUTES } from '../constants/app';
import { useApp } from '../hooks/useApp';
import type { ProductCategory } from '../models';

export function CategoryTabs({ navigateOnSelect = false }: { navigateOnSelect?: boolean }) {
  const { data, selectedCategory, setSelectedCategory, navigate } = useApp();
  if (!data) return null;

  const select = (category: ProductCategory) => {
    setSelectedCategory(category);
    if (navigateOnSelect) navigate(`${ROUTES.PRODUCTS}?category=${category}`);
  };

  return (
    <div className="category-tabs" role="tablist">
      {data.categories.map((category) => (
        <button
          role="tab"
          aria-selected={selectedCategory === category.id}
          className={selectedCategory === category.id ? 'category-tab active' : 'category-tab'}
          key={category.id}
          onClick={() => select(category.id)}
        >{category.label}</button>
      ))}
    </div>
  );
}
