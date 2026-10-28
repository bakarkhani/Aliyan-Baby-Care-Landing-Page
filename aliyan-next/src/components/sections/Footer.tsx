import { siteConfig } from '@/config/site';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { SocialMark } from '@/components/ui/SocialMark';

export function Footer() {
  const { business, socialProfiles, shopUrl } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <h2>{business.name}</h2>
            <p>
              Everything Your Little One Needs. A neighbourhood baby- and
              mother-care shop in Lahore.
            </p>
            <div className="footer-socials" aria-label="Social profiles">
              {socialProfiles.map((profile) => (
                <ExternalLink
                  key={profile.name}
                  href={profile.href}
                  ariaLabel={`Visit us on ${profile.name}`}
                  testId={`link-footer-social-${profile.name.toLowerCase()}`}
                >
                  <SocialMark kind={profile.icon} />
                </ExternalLink>
              ))}
            </div>
          </div>
          <nav className="footer-col" aria-label="Explore">
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="#top" data-testid="link-footer-home">
                  Home
                </a>
              </li>
              <li>
                <a href="#featured" data-testid="link-footer-featured">
                  Featured categories
                </a>
              </li>
              <li>
                <a href="#social" data-testid="link-footer-social-updates">
                  Social updates
                </a>
              </li>
              <li>
                <ExternalLink href={shopUrl} testId="link-footer-tazzbazar">
                  Visit TazzBazar
                </ExternalLink>
              </li>
            </ul>
          </nav>
          <nav className="footer-col" aria-label="Customer information">
            <h3>Customer info</h3>
            <ul>
              <li>
                <a
                  href="#information"
                  data-testid="link-footer-delivery-payment"
                >
                  Delivery & payment
                </a>
              </li>
              <li>
                <a
                  href="#information"
                  data-testid="link-footer-parcel-inspection"
                >
                  Parcel inspection
                </a>
              </li>
              <li>
                <a
                  href="#information"
                  data-testid="link-footer-returns-warranty"
                >
                  Returns & warranty
                </a>
              </li>
              <li>
                <a
                  href="#information"
                  data-testid="link-footer-privacy-terms"
                >
                  Privacy & terms — pending
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer-col">
            <h3>Find us</h3>
            <ul>
              <li>
                <a href={business.phoneHref} data-testid="link-footer-phone">
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  data-testid="link-footer-email"
                >
                  {business.email}
                </a>
              </li>
              <li>{business.address}</li>
              <li>Opening hours: {business.hours}</li>
            </ul>
          </div>
        </div>
        <div className="footer-ending">
          <span
            className="footer-art-description"
            role="img"
            aria-label="Watercolor illustration of a smiling baby waving from a golden crescent moon, surrounded by clouds, flowers, foliage, and stars."
          />
          <p className="copyright">
            © {currentYear} {business.name}
            <br />
            Lahore, Pakistan
          </p>
          <div className="footer-signoff">
            <p className="farewell-line">Sweet dreams, little ones.</p>
            <a className="back-to-top" href="#top" data-testid="link-footer-back-to-top">
              ↑ Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
