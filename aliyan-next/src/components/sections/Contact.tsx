import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { SocialMark } from '@/components/ui/SocialMark';
import { OrganicTransition } from '@/components/ui/OrganicTransition';

export function Contact() {
  const { business } = siteConfig;

  return (
    <section
      className="contact-section"
      id="contact"
      data-scroll-scene
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <div className="wrap contact-panel">
        <div className="contact-title" data-reveal>
          <span className="eyebrow" id="contact-eyebrow">
            We’re right here
          </span>
          <h2 className="contact-location" id="contact-title">Right here in Amir Town, Lahore.</h2>
          <p>
            Questions about delivery or the right way to order? Contact the shop
            for the latest details.
          </p>
          <ExternalLink href={business.whatsapp} className="button-primary">
            Say hello on WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
          </ExternalLink>
        </div>
        <div className="contact-details" data-reveal data-reveal-stagger>
          <a
            className="contact-detail"
            href={business.phoneHref}
            data-testid="link-contact-phone"
          >
            <Phone aria-hidden="true" />
            <span>
              <strong>Call the shop</strong>
              {business.phone}
            </span>
          </a>
          <ExternalLink
            href={business.whatsapp}
            className="contact-detail"
            testId="link-contact-whatsapp"
          >
            <SocialMark kind="whatsapp" />
            <span>
              <strong>WhatsApp</strong>Message Aliyan Baby Care
            </span>
          </ExternalLink>
          <a
            className="contact-detail"
            href={`mailto:${business.email}`}
            data-testid="link-contact-email"
          >
            <Mail aria-hidden="true" />
            <span>
              <strong>Email</strong>
              {business.email}
            </span>
          </a>
          <div className="contact-detail">
            <Clock3 aria-hidden="true" />
            <span data-testid="text-contact-hours">
              <strong>Opening hours</strong>
              {business.hours}
            </span>
          </div>
          <div className="contact-detail address">
            <MapPin aria-hidden="true" />
            <span data-testid="text-contact-address">
              <strong>Find us in Lahore</strong>
              {business.name}, {business.address}
            </span>
          </div>
        </div>
      </div>
      <OrganicTransition tone="alt" shape="rolling" />
    </section>
  );
}
