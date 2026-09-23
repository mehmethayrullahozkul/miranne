import { CategoryTabs } from '../components/CategoryTabs';
import { HeroCarousel } from '../components/HeroCarousel';
import { ProductGrid } from '../components/ProductGrid';
import { PrimaryButton } from '../components/PrimaryButton';
import { ROUTES } from '../constants/app';
import { useApp } from '../hooks/useApp';

export function HomePage() {
  const { data, selectedCategory, navigate } = useApp();
  if (!data) return null;
  const featuredProducts = data.products.filter((product) => product.featured && (selectedCategory === 'all' || product.category === selectedCategory));

  return (
    <main>
      <HeroCarousel />
      <CategoryTabs navigateOnSelect />
      <section className="content-section home-products">
        <div className="section-heading">
          <div><span>{data.content.home.collectionEyebrow}</span><h1>{data.content.home.collectionTitle}</h1></div>
          <button onClick={() => navigate(ROUTES.PRODUCTS)}>{data.content.home.collectionAction}</button>
        </div>
        <ProductGrid products={featuredProducts} emptyText={data.content.products.empty} />
      </section>
      <section className="story-panel" id="about">
        <span className="story-mark">{data.content.home.brandMark}</span>
        <div><h2>{data.content.home.aboutTitle}</h2><p>{data.content.home.aboutText}</p></div>
      </section>
      <section className="help-panel" id="help">
        <h2>{data.content.home.helpTitle}</h2><p>{data.content.home.helpText}</p>
        <PrimaryButton variant="secondary" onClick={() => navigate(ROUTES.PROFILE)}>{data.content.header.account}</PrimaryButton>
      </section>
    </main>
  );
}
