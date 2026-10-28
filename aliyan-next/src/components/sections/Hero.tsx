import { ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Hero() {
  const { business } = siteConfig;

  return (
    <header className="hero" id="top">
      <span
        className="hero-art-description"
        role="img"
        aria-label="Watercolor illustration of a sleeping baby on a golden crescent moon, surrounded by clouds, flowers, foliage, and stars."
      />
      <div className="hero-stage">
        <div className="shelf">
          <h1 data-testid="text-brand-name">{business.name}</h1>
        </div>
        <nav className="hero-navigation" aria-label="Primary">
          <a
            className="hanging-nav shop-hanger"
            href="#featured"
            aria-label="Shop featured categories"
            data-testid="link-shop-featured"
          >
            <span className="leaf-thread" aria-hidden="true" />
            <span className="leaf-bough" aria-hidden="true">
              <i className="leaf" />
              <i className="leaf" />
              <i className="leaf" />
              <i className="leaf" />
              <i className="leaf" />
              <span className="hanger-label">Shop</span>
            </span>
          </a>
          <a
            className="hanging-nav contact-hanger"
            href="#contact"
            aria-label="Go to contact information"
            data-testid="link-contact"
          >
            <span className="star-string" aria-hidden="true" />
            <span className="star-charm" aria-hidden="true">
              <Star />
            </span>
            <span className="hanger-label">Contact</span>
          </a>
        </nav>
      </div>
      <div className="wrap">
        <div className="hero-content">
          <div className="hero-copy">
            <p>Baby and mother-care essentials, here in your Lahore neighbourhood.</p>
          </div>
          <p className="hero-side-note">
            Trust · Quality · Affordable Prices<span>Amir Town · Lahore</span>
          </p>
        </div>
        <div className="hero-bottom">
          <a
            className="scroll-cue"
            href="#featured"
            data-testid="link-explore-collection"
          >
            <span>Explore</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
