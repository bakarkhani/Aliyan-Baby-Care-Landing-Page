import { Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { SocialMark } from '@/components/ui/SocialMark';

export function Contact() {
  const { business } = siteConfig;

  return (
    <section
      className="contact-section"
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-eyebrow"
    >
      <div className="wrap contact-panel">
        <div className="contact-title">
          <span className="eyebrow" id="contact-eyebrow">
            We’re right here
          </span>
          <p>
            Questions about delivery or the right way to order? Contact the shop
            for the latest details.
          </p>
        </div>
        <div className="contact-details">
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
    </section>
  );
}
