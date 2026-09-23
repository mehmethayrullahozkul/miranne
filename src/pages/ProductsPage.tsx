import { useMemo, useState } from 'react';
import { CategoryTabs } from '../components/CategoryTabs';
import { Icon } from '../components/Icon';
import { ProductGrid } from '../components/ProductGrid';
import { useApp } from '../hooks/useApp';

export function ProductsPage() {
  const { data, selectedCategory } = useApp();
  const [descending, setDescending] = useState(false);
  if (!data) return null;
  const selectedLabel = data.categories.find((category) => category.id === selectedCategory)?.label ?? data.content.products.title;
  const visibleProducts = useMemo(() => data.products
    .filter((product) => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => descending ? b.price - a.price : a.price - b.price), [data.products, descending, selectedCategory]);

  return (
    <main className="page-with-padding products-page">
      <div className="title-row"><h1>{selectedLabel}</h1><span>{visibleProducts.length} {data.content.products.resultSuffix}</span></div>
      <div className="product-tools">
        <button onClick={() => setDescending((value) => !value)}><Icon name="sort" size={18} />{data.content.products.sort}</button>
        <button onClick={() => document.querySelector('.category-tabs')?.scrollIntoView({ behavior: 'smooth' })}><Icon name="filter" size={18} />{data.content.products.filter}</button>
      </div>
      <CategoryTabs />
      <ProductGrid products={visibleProducts} emptyText={data.content.products.empty} />
    </main>
  );
}
