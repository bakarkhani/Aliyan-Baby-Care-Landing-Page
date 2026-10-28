'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag } from 'lucide-react';
import { categories, featuredSlots, siteConfig, type Category } from '@/config/site';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function FeaturedProducts() {
  const [category, setCategory] = useState<Category>('Diapers');
  const [slot, setSlot] = useState(0);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const [isPointerInside, setIsPointerInside] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStart = useRef<number | null>(null);
  const slots = featuredSlots[category];

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);

    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (isPointerInside || hasFocus || isTouching || reducedMotion) return;

    const interval = window.setInterval(() => {
      setDirection('next');
      setSlot((current) => (current + 1) % slots.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [category, hasFocus, isPointerInside, isTouching, reducedMotion, slots.length]);

  function changeCategory(next: Category) {
    setCategory(next);
    setSlot(0);
    setDirection('next');
  }

  function changeSlot(step: number) {
    setDirection(step > 0 ? 'next' : 'previous');
    setSlot((current) => (current + step + slots.length) % slots.length);
  }

  return (
    <section
      className="featured"
      id="featured"
      tabIndex={-1}
      aria-labelledby="featured-title"
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setIsPointerInside(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse') setIsPointerInside(false);
      }}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (
          !(event.relatedTarget instanceof Node) ||
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          setHasFocus(false);
        }
      }}
    >
      <div className="wrap">
        <div className="section-heading">
          <span className="eyebrow">A small first look</span>
          <h2 id="featured-title">Featured Items</h2>
        </div>
        <div
          className="category-tabs"
          role="tablist"
          aria-label="Featured product categories"
        >
          {categories.map((item) => (
            <button
              className="category-tab"
              type="button"
              role="tab"
              aria-selected={category === item}
              aria-controls="featured-panel"
              id={`tab-${item.toLowerCase().replaceAll(' ', '-')}`}
              key={item}
              onClick={() => changeCategory(item)}
              tabIndex={category === item ? 0 : -1}
              data-testid={`button-category-${item.toLowerCase().replaceAll(' ', '-')}`}
              onKeyDown={(event) => {
                if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
                event.preventDefault();
                const currentIndex = categories.indexOf(item);
                const nextIndex =
                  event.key === 'Home'
                    ? 0
                    : event.key === 'End'
                      ? categories.length - 1
                      : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + categories.length) %
                        categories.length;
                const nextCategory = categories[nextIndex];
                if (!nextCategory) return;
                changeCategory(nextCategory);
                event.currentTarget.parentElement
                  ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
                  [nextIndex]?.focus();
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          className="slider-card"
          id="featured-panel"
          role="tabpanel"
          aria-labelledby={`tab-${category.toLowerCase().replaceAll(' ', '-')}`}
          data-testid="card-featured-product"
          onTouchStart={(event) => {
            setIsTouching(true);
            touchStart.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(event) => {
            const end = event.changedTouches[0]?.clientX;
            if (
              touchStart.current !== null &&
              end !== undefined &&
              Math.abs(end - touchStart.current) > 55
            ) {
              changeSlot(end < touchStart.current ? 1 : -1);
            }
            touchStart.current = null;
            setIsTouching(false);
          }}
          onTouchCancel={() => {
            touchStart.current = null;
            setIsTouching(false);
          }}
        >
          <div className="product-art">
            <span className="slot-number" data-testid="text-featured-slot">
              {category} · {String(slot + 1).padStart(2, '0')} / 05
            </span>
            <div
              className={`product-placeholder slide-${direction}`}
              key={`${category}-${slot}-${direction}`}
            >
              <ShoppingBag aria-hidden="true" />
              <strong>Featured item placeholder</strong>
              <span>Product photo and details will be added when confirmed.</span>
            </div>
          </div>
          <div className="product-copy">
            <span className="eyebrow">Coming into focus</span>
            <h3>
              {category} feature slot {slot + 1}
            </h3>
            <p>
              This space is reserved for a selected Aliyan Baby Care item. No
              product details or destination have been supplied yet.
            </p>
            <button
              className="button-primary"
              type="button"
              disabled
              aria-disabled="true"
              title="Available when product details and destination are confirmed"
              data-testid="button-shop-featured-disabled"
            >
              Shop Now <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div
          className="slider-controls"
          aria-label="Featured product slider controls"
        >
          <button
            className="arrow-button"
            type="button"
            onClick={() => changeSlot(-1)}
            aria-label="Previous featured slot"
            data-testid="button-previous-featured"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <span
            className="slider-position"
            aria-live="polite"
            data-testid="text-featured-position"
          >
            <strong>{String(slot + 1).padStart(2, '0')}</strong> / 05
          </span>
          <button
            className="arrow-button"
            type="button"
            onClick={() => changeSlot(1)}
            aria-label="Next featured slot"
            data-testid="button-next-featured"
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
        <p className="browse-note">
          For the full shop, visit{' '}
          <ExternalLink href={siteConfig.shopUrl} testId="link-tazzbazar">
            TazzBazar
          </ExternalLink>
          .
        </p>
      </div>
    </section>
  );
}
