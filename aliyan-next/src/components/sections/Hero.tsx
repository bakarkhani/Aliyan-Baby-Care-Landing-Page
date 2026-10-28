import { ArrowRight, Star } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { OrganicTransition } from '@/components/ui/OrganicTransition';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function Hero() {
  const { business } = siteConfig;

  return (
    <header className="hero" id="top" data-scroll-scene>
      <OrganicTransition tone="alt" shape="rolling" />
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
            <span className="eyebrow">Your neighbourhood baby-care shop</span>
            <p className="hero-tagline">{business.tagline}</p>
            <p className="hero-location">Right here in Amir Town, Lahore.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#featured">
                Explore the shop <ArrowRight size={17} aria-hidden="true" />
              </a>
              <ExternalLink href={business.whatsapp} className="hero-contact-link">
                Chat with the shop
              </ExternalLink>
            </div>
          </div>
          <div className="hero-artwork">
            <div className="hero-scene" id="hero-scene" aria-hidden="true">
              <div className="hero-scene-parallax">
                <div className="hero-scene-art" />
              </div>
            </div>
            <span className="hero-art-description" role="img"
              aria-label="Watercolor illustration of a sleeping baby on a golden crescent moon, surrounded by clouds, flowers, foliage, and stars." />
          </div>
        </div>
        <div className="hero-bottom">
          <p className="hero-promise">Trust · Quality · Affordable Prices</p>
          <a
            className="scroll-cue"
            href="#featured"
            data-reveal
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
