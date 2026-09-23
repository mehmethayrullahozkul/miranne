import { useEffect, useState } from 'react';
import { APP_CONFIG, ROUTES } from '../constants/app';
import { useApp } from '../hooks/useApp';

export function HeroCarousel() {
  const { data, navigate } = useApp();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!data || data.slides.length < 2) return;
    const timer = window.setInterval(() => setActiveIndex((index) => (index + 1) % data.slides.length), APP_CONFIG.heroIntervalMs);
    return () => window.clearInterval(timer);
  }, [data]);

  if (!data) return null;
  const slide = data.slides[activeIndex];
  return (
    <section className="hero" aria-roledescription="carousel">
      <button className="hero-click-area" onClick={() => navigate(ROUTES.PRODUCTS)}>
        <img className="hero-image" src={slide.imageUrl} alt="" />
        <span className="hero-shade" />
        <span className="hero-copy">
          <span className="hero-eyebrow">{slide.eyebrow}</span>
          <strong>{slide.title}</strong>
          <span>{slide.description}</span>
        </span>
      </button>
      <div className="hero-dots" aria-hidden="true">
        {data.slides.map((item, index) => <span className={index === activeIndex ? 'active' : ''} key={item.id} />)}
      </div>
    </section>
  );
}
