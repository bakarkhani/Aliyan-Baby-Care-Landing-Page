import { PackageCheck } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { SocialMark } from '@/components/ui/SocialMark';
import { OrganicTransition } from '@/components/ui/OrganicTransition';

export function SocialShowcase() {
  const { socialProfiles, socialPlaceholders } = siteConfig;

  return (
    <section
      className="social"
      id="social"
      data-scroll-scene
      tabIndex={-1}
      aria-labelledby="social-title"
    >
      <div className="wrap social-layout">
        <div className="social-intro" data-reveal>
          <span className="eyebrow">Stay close</span>
          <h2 id="social-title">Little updates, from our neighbourhood.</h2>
          <p>Find Aliyan Baby Care on your favourite social platform, or message the shop directly.</p>
          <nav
            className="social-links"
            aria-label="Aliyan Baby Care social profiles"
          >
            {socialProfiles.map((profile) => (
              <ExternalLink
                key={profile.name}
                href={profile.href}
                className="social-link"
                ariaLabel={`Visit Aliyan Baby Care on ${profile.name}`}
                testId={`link-social-${profile.name.toLowerCase()}`}
              >
                <SocialMark kind={profile.icon} />
                <span>{profile.name}</span>
              </ExternalLink>
            ))}
          </nav>
        </div>
        <div
          className="social-grid"
          aria-label="Social content placeholders"
          data-reveal
          data-reveal-stagger
        >
          {socialPlaceholders.map((label) => (
            <div
              className="social-placeholder"
              role="img"
              aria-label={`Development placeholder: ${label}; real social content not supplied`}
              data-testid={`placeholder-social-${label.toLowerCase().replaceAll(' ', '-')}`}
              key={label}
            >
              <PackageCheck aria-hidden="true" />
              <span>{label}</span>
              <small>Content placeholder</small>
            </div>
          ))}
          <p className="social-caption">
            Development placeholders — no posts or live feed are shown.
          </p>
        </div>
      </div>
      <OrganicTransition tone="alt" shape="rolling" />
    </section>
  );
}
