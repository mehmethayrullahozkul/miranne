import { useMemo, useState } from 'react';
import { Icon } from '../components/Icon';
import { ProductGrid } from '../components/ProductGrid';
import { useApp } from '../hooks/useApp';
import { normalizeSearchValue } from '../utils/formatters';

export function SearchPage() {
  const { data } = useApp();
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    if (!data || !normalizeSearchValue(query)) return [];
    const normalized = normalizeSearchValue(query);
    return data.products.filter((product) => normalizeSearchValue(`${product.name} ${product.description}`).includes(normalized));
  }, [data, query]);
  if (!data) return null;

  return (
    <main className="search-page">
      <div className="search-field"><Icon name="search" size={17} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} aria-label={data.content.search.title} placeholder={data.content.search.placeholder} /></div>
      {!query && <div className="search-prompt"><Icon name="search" size={28} /><p>{data.content.search.prompt}</p></div>}
      {query && <section className="search-results"><div className="title-row"><h1>{data.content.search.title}</h1><span>{results.length} {data.content.search.resultSuffix}</span></div><ProductGrid products={results} emptyText={data.content.search.noResult} /></section>}
    </main>
  );
}
