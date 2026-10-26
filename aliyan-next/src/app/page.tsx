import { Hero } from '@/components/sections/Hero';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { SocialShowcase } from '@/components/sections/SocialShowcase';
import { CustomerInformation } from '@/components/sections/CustomerInformation';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <div className="site-shell">
      <a
        className="skip-link"
        href="#featured"
        data-testid="link-skip-to-featured"
      >
        Skip to featured categories
      </a>
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
