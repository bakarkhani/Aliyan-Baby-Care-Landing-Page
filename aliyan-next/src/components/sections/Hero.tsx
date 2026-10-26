import { ArrowDown, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Hero() {
  const { business } = siteConfig;

  return (
    <header className="hero" id="top">
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
      <div className="wrap">
        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">A little care, close to home</span>
            <h2>Gentle care for every little day.</h2>
            <p>Baby and mother-care essentials, here in your Lahore neighbourhood.</p>
          </div>
          <div className="hero-art">
            <div
              className="art-placeholder"
              role="img"
              aria-label="Development placeholder for the sleeping baby on a crescent moon hero artwork"
              data-testid="placeholder-hero-artwork"
            >
              <div className="placeholder-inner">
                <strong>Hero artwork placeholder</strong>
                <span>Sleeping baby on a crescent moon artwork to be supplied.</span>
              </div>
            </div>
            <p className="hero-caption">Development placeholder — original artwork not supplied</p>
          </div>
          <p className="hero-side-note">
            Everything your little one needs<span>Amir Town · Lahore</span>
          </p>
        </div>
        <div className="hero-bottom">
          <a
            className="scroll-cue"
            href="#featured"
            data-testid="link-explore-collection"
          >
            <span>Explore the collection</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
