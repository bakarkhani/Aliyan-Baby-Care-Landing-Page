import { useRef, useState, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from 'lucide-react';

const business = {
  name: 'Aliyan Baby Care',
  phone: '0302 5913398',
  phoneHref: 'tel:+923025913398',
  whatsapp: 'https://wa.me/923025913398',
  email: 'aliyanbabycare@gmail.com',
  address: 'Near Trust School Gate No. 9, Amir Town, Harbanspura, Lahore 54850, Pakistan',
  hours: '12:00 PM – 12:00 AM',
};

const shopUrl = 'https://www.tazzbazar.com/';
const socialProfiles = [
  { name: 'Facebook', href: 'https://www.facebook.com/aliyanbabycare/', icon: 'facebook' },
  { name: 'Instagram', href: 'https://www.instagram.com/aliyanbabycare/', icon: 'instagram' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@aliyanbabycare', icon: 'tiktok' },
  { name: 'WhatsApp', href: 'https://wa.me/923025913398', icon: 'whatsapp' },
];
const categories = ['Mother Care', 'Diapers', 'Baby Care'] as const;
type Category = (typeof categories)[number];
const featuredSlots: Record<Category, number[]> = {
  'Mother Care': [1, 2, 3, 4, 5],
  Diapers: [1, 2, 3, 4, 5],
  'Baby Care': [1, 2, 3, 4, 5],
};

const policyItems = [
  {
    id: 'delivery',
    title: 'Delivery coverage & charges',
    icon: <Truck aria-hidden="true" />,
    content: (
      <p>
        Free delivery is available within a 2 km radius of Amir Town. Additional
        delivery charges apply outside this area. Please confirm delivery
        availability and charges before ordering.
      </p>
    ),
  },
  {
    id: 'payment',
    title: 'Payment methods',
    icon: <ShieldCheck aria-hidden="true" />,
    content: (
      <p>
        Delivery charges must be paid in advance through Easypaisa or JazzCash.
        The product amount is payable on delivery. Please confirm the payment
        arrangement before ordering.
      </p>
    ),
  },
  {
    id: 'inspection',
    title: 'Parcel inspection',
    icon: <PackageCheck aria-hidden="true" />,
    content: (
      <p>
        Please inspect your parcel before accepting delivery. If parcel
        inspection is not permitted at delivery, you may refuse the parcel.
      </p>
    ),
  },
  {
    id: 'returns',
    title: 'Returns, exchanges & cancellations',
    pending: true,
    content: (
      <p>
        The detailed policy is pending business confirmation. Please contact
        Aliyan Baby Care to discuss an order before making a decision.
      </p>
    ),
  },
  {
    id: 'warranty',
    title: 'Product warranty',
    pending: true,
    content: (
      <p>
        Warranty coverage, where applicable, depends on the particular product
        and its terms. Please check the product-specific warranty information.
        Further guidance is pending business confirmation.
      </p>
    ),
  },
  {
    id: 'privacy',
    title: 'Privacy & terms',
    pending: true,
    content: (
      <p>
        Privacy information and terms of service are pending review and
        confirmation. These draft placeholders are not legal advice.
      </p>
    ),
  },
];

function SocialMark({ kind }: { kind: string }) {
  if (kind === 'facebook') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z" fill="currentColor" /></svg>;
  }
  if (kind === 'instagram') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.7" cy="6.6" r="1.1" fill="currentColor" /></svg>;
  }
  if (kind === 'tiktok') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3v11.2a3.2 3.2 0 1 1-2.8-3.2V8.1a6.3 6.3 0 1 0 5.9 6.1V8.7c1.2.8 2.5 1.2 3.9 1.2V6.7c-3.1-.1-5-1.7-5.4-3.7H14Z" fill="currentColor" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a8.8 8.8 0 0 0-7.6 13.3L3.2 21l4.9-1.3A8.9 8.9 0 1 0 12 3Zm0 15.8a7 7 0 0 1-3.6-1l-.3-.2-2.9.8.8-2.8-.2-.3A7 7 0 1 1 12 18.8Zm3.8-5.2c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.4-.5.3-.4c.1-.1 0-.3 0-.4s-.5-1.3-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.1.9 2.2c.1.2 1.6 2.4 3.8 3.3.5.2 1 .4 1.3.5.5.2 1 .2 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" fill="currentColor" /></svg>;
}

function ExternalLink({ href, children, className, ariaLabel, testId }: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  testId?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} data-testid={testId}>
      {children}
    </a>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="shelf"><h1 data-testid="text-brand-name">{business.name}</h1></div>
      <nav className="hero-navigation" aria-label="Primary">
        <a className="hanging-nav shop-hanger" href="#featured" aria-label="Shop featured categories" data-testid="link-shop-featured">
          <span className="leaf-thread" aria-hidden="true" />
          <span className="leaf-bough" aria-hidden="true">
            <i className="leaf" /><i className="leaf" /><i className="leaf" /><i className="leaf" /><i className="leaf" />
            <span className="hanger-label">Shop</span>
          </span>
        </a>
        <a className="hanging-nav contact-hanger" href="#contact" aria-label="Go to contact information" data-testid="link-contact">
          <span className="star-string" aria-hidden="true" />
          <span className="star-charm" aria-hidden="true"><Star /></span>
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
            <div className="art-placeholder" role="img" aria-label="Development placeholder for the sleeping baby on a crescent moon hero artwork" data-testid="placeholder-hero-artwork">
              <div className="placeholder-inner">
                <strong>Hero artwork placeholder</strong>
                <span>Sleeping baby on a crescent moon artwork to be supplied.</span>
              </div>
            </div>
            <p className="hero-caption">Development placeholder — original artwork not supplied</p>
          </div>
          <p className="hero-side-note">Everything your little one needs<span>Amir Town · Lahore</span></p>
        </div>
        <div className="hero-bottom">
          <a className="scroll-cue" href="#featured" data-testid="link-explore-collection"><span>Explore the collection</span><ArrowDown size={15} aria-hidden="true" /></a>
        </div>
      </div>
    </header>
  );
}

function FeaturedProducts() {
  const [category, setCategory] = useState<Category>('Diapers');
  const [slot, setSlot] = useState(0);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const touchStart = useRef<number | null>(null);
  const slots = featuredSlots[category];

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
    <section className="featured" id="featured" aria-labelledby="featured-title">
      <div className="wrap">
        <div className="section-heading">
          <span className="eyebrow">A small first look</span>
          <h2 id="featured-title">Featured finds</h2>
          <p>A preview of what we’ll be sharing here. Featured products are being selected; each space is ready for a real item.</p>
        </div>
        <div className="category-tabs" role="tablist" aria-label="Featured product categories">
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
                const nextIndex = event.key === 'Home'
                  ? 0
                  : event.key === 'End'
                    ? categories.length - 1
                    : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + categories.length) % categories.length;
                const nextCategory = categories[nextIndex];
                if (!nextCategory) return;
                changeCategory(nextCategory);
                event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
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
          onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            const end = event.changedTouches[0]?.clientX;
            if (touchStart.current !== null && end !== undefined && Math.abs(end - touchStart.current) > 55) {
              changeSlot(end < touchStart.current ? 1 : -1);
            }
            touchStart.current = null;
          }}
        >
          <div className="product-art">
            <span className="slot-number" data-testid="text-featured-slot">{category} · {String(slot + 1).padStart(2, '0')} / 05</span>
            <div className={`product-placeholder slide-${direction}`} key={`${category}-${slot}-${direction}`}>
              <ShoppingBag aria-hidden="true" />
              <strong>Featured item placeholder</strong>
              <span>Product photo and details will be added when confirmed.</span>
            </div>
          </div>
          <div className="product-copy">
            <span className="eyebrow">Coming into focus</span>
            <h3>{category} feature slot {slot + 1}</h3>
            <p>This space is reserved for a selected Aliyan Baby Care item. No product details or destination have been supplied yet.</p>
            <button className="button-primary" type="button" disabled aria-disabled="true" title="Available when product details and destination are confirmed" data-testid="button-shop-featured-disabled">
              Shop Now <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="slider-controls" aria-label="Featured product slider controls">
          <button className="arrow-button" type="button" onClick={() => changeSlot(-1)} aria-label="Previous featured slot" data-testid="button-previous-featured">
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <span className="slider-position" aria-live="polite" data-testid="text-featured-position"><strong>{String(slot + 1).padStart(2, '0')}</strong> / 05</span>
          <button className="arrow-button" type="button" onClick={() => changeSlot(1)} aria-label="Next featured slot" data-testid="button-next-featured">
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
        <p className="browse-note">
          For the full shop, visit <ExternalLink href={shopUrl} testId="link-tazzbazar">TazzBazar</ExternalLink>.
        </p>
      </div>
    </section>
  );
}

function SocialShowcase() {
  return (
    <section className="social" id="social" aria-labelledby="social-title">
      <div className="wrap social-layout">
        <div className="social-intro">
          <span className="eyebrow">Stay close</span>
          <h2 id="social-title">Little updates, from our neighbourhood.</h2>
          <p>Follow Aliyan Baby Care on social, or say hello directly. Our visual gallery will grow when real shop posts are ready to share.</p>
          <nav className="social-links" aria-label="Aliyan Baby Care social profiles">
            {socialProfiles.map((profile) => (
              <ExternalLink key={profile.name} href={profile.href} className="social-link" ariaLabel={`Visit Aliyan Baby Care on ${profile.name}`} testId={`link-social-${profile.name.toLowerCase()}`}>
                <SocialMark kind={profile.icon} /><span>{profile.name}</span>
              </ExternalLink>
            ))}
          </nav>
        </div>
        <div className="social-grid" aria-label="Social content placeholders">
          {['Shop moments', 'Product feature', 'A little reel', 'Care essentials', 'From our shelves', 'Community update'].map((label) => (
            <div className="social-placeholder" role="img" aria-label={`Development placeholder: ${label}; real social content not supplied`} data-testid={`placeholder-social-${label.toLowerCase().replaceAll(' ', '-')}`} key={label}>
              <PackageCheck aria-hidden="true" />
              <span>{label}</span>
              <small>Content placeholder</small>
            </div>
          ))}
          <p className="social-caption">Development placeholders — no posts or live feed are shown.</p>
        </div>
      </div>
    </section>
  );
}

function CustomerInformation() {
  const [open, setOpen] = useState('delivery');
  return (
    <section className="customer-info" id="information" aria-labelledby="information-title">
      <div className="wrap info-layout">
        <div className="info-aside">
          <span className="eyebrow">Good to know</span>
          <h2 id="information-title">Clear details, before you order.</h2>
          <p>Helpful information for shopping with Aliyan Baby Care. For order-specific questions, please get in touch before ordering.</p>
          <div className="mini-note">TazzBazar handles the full catalogue and checkout. This page is a starting point, not a checkout.</div>
        </div>
        <div className="accordion">
          {policyItems.map((item) => {
            const expanded = open === item.id;
            return (
              <div className="policy-item" key={item.id}>
                <button
                  className="policy-trigger"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`policy-${item.id}`}
                  onClick={() => setOpen(expanded ? '' : item.id)}
                  data-testid={`button-policy-${item.id}`}
                >
                  <span className="policy-title">{item.icon}<span>{item.title}</span></span>
                  <span className="policy-indicator">{item.pending && <span className="pending-tag">Pending review</span>}<Plus aria-hidden="true" /></span>
                </button>
                <div className="policy-content" id={`policy-${item.id}`} hidden={!expanded} aria-hidden={!expanded}>{item.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-panel">
        <div className="contact-title">
          <span className="eyebrow">We’re right here</span>
          <h2 id="contact-title">A friendly hello is always welcome.</h2>
          <p>Questions about delivery or the right way to order? Contact the shop for the latest details.</p>
        </div>
        <div className="contact-details">
          <a className="contact-detail" href={business.phoneHref} data-testid="link-contact-phone">
            <Phone aria-hidden="true" />
            <span><strong>Call the shop</strong>{business.phone}</span>
          </a>
          <ExternalLink href={business.whatsapp} className="contact-detail" testId="link-contact-whatsapp">
            <SocialMark kind="whatsapp" />
            <span><strong>WhatsApp</strong>Message Aliyan Baby Care</span>
          </ExternalLink>
          <a className="contact-detail" href={`mailto:${business.email}`} data-testid="link-contact-email">
            <Mail aria-hidden="true" />
            <span><strong>Email</strong>{business.email}</span>
          </a>
          <div className="contact-detail">
            <Clock3 aria-hidden="true" />
            <span data-testid="text-contact-hours"><strong>Opening hours</strong>{business.hours}</span>
          </div>
          <div className="contact-detail address">
            <MapPin aria-hidden="true" />
            <span data-testid="text-contact-address"><strong>Find us in Lahore</strong>{business.name}, {business.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>{business.name}</h2>
            <p>Everything Your Little One Needs. A neighbourhood baby- and mother-care shop in Lahore.</p>
            <div className="footer-socials" aria-label="Social profiles">
              {socialProfiles.map((profile) => (
                <ExternalLink key={profile.name} href={profile.href} ariaLabel={`Visit us on ${profile.name}`} testId={`link-footer-social-${profile.name.toLowerCase()}`}>
                  <SocialMark kind={profile.icon} />
                </ExternalLink>
              ))}
            </div>
          </div>
          <nav className="footer-col" aria-label="Explore">
            <h3>Explore</h3>
            <ul>
              <li><a href="#top" data-testid="link-footer-home">Home</a></li>
              <li><a href="#featured" data-testid="link-footer-featured">Featured categories</a></li>
              <li><a href="#social" data-testid="link-footer-social-updates">Social updates</a></li>
              <li><ExternalLink href={shopUrl} testId="link-footer-tazzbazar">Visit TazzBazar</ExternalLink></li>
            </ul>
          </nav>
          <nav className="footer-col" aria-label="Customer information">
            <h3>Customer info</h3>
            <ul>
              <li><a href="#information" data-testid="link-footer-delivery-payment">Delivery & payment</a></li>
              <li><a href="#information" data-testid="link-footer-parcel-inspection">Parcel inspection</a></li>
              <li><a href="#information" data-testid="link-footer-returns-warranty">Returns & warranty</a></li>
              <li><a href="#information" data-testid="link-footer-privacy-terms">Privacy & terms — pending</a></li>
            </ul>
          </nav>
          <div className="footer-col">
            <h3>Find us</h3>
            <ul>
              <li><a href={business.phoneHref} data-testid="link-footer-phone">{business.phone}</a></li>
              <li><a href={`mailto:${business.email}`} data-testid="link-footer-email">{business.email}</a></li>
              <li>{business.address}</li>
              <li>Opening hours: {business.hours}</li>
            </ul>
          </div>
        </div>
        <div className="footer-ending">
          <div className="farewell-placeholder" role="img" aria-label="Development placeholder for the waving baby on a crescent moon farewell artwork" data-testid="placeholder-farewell-artwork">
            Farewell artwork placeholder — waving baby on a crescent moon to be supplied.
          </div>
          <p className="farewell-line">Sweet dreams, little ones.</p>
          <p className="copyright">© {new Date().getFullYear()} {business.name}<br />Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#featured" data-testid="link-skip-to-featured">Skip to featured categories</a>
      <Hero />
      <main id="main-content">
        <FeaturedProducts />
        <SocialShowcase />
        <CustomerInformation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
