'use client';

import { useState } from 'react';
import { ArrowUpRight, PackageCheck, Plus, ShieldCheck, Truck } from 'lucide-react';
import { ExternalLink } from '@/components/ui/ExternalLink';
import { siteConfig } from '@/config/site';
import { OrganicTransition } from '@/components/ui/OrganicTransition';

function PolicyIcon({ type }: { type?: string }) {
  if (type === 'truck') return <Truck aria-hidden="true" />;
  if (type === 'shield') return <ShieldCheck aria-hidden="true" />;
  if (type === 'package') return <PackageCheck aria-hidden="true" />;
  return null;
}

export function CustomerInformation() {
  const [open, setOpen] = useState('delivery');
  const { policies } = siteConfig;

  return (
    <section
      className="customer-info"
      id="information"
      data-scroll-scene
      tabIndex={-1}
      aria-labelledby="information-title"
    >
      <div className="wrap info-layout">
        <div className="info-aside" data-reveal>
          <span className="eyebrow">Good to know</span>
          <h2 id="information-title">
            Find your favourites and order on TazzBazar.
          </h2>
          <p>Browse our products and order online.</p>
          <div className="mini-note">
            <Truck size={23} aria-hidden="true" />
            <div><strong>Delivery, close to home.</strong>
              <p>Free delivery within Amir Town&apos;s 2 km delivery radius. Additional delivery charges apply beyond this area.</p>
            </div>
          </div>
          <ExternalLink href={siteConfig.shopUrl} className="button-outline">
            Visit TazzBazar <ArrowUpRight size={16} aria-hidden="true" />
          </ExternalLink>
          <p className="checkout-note">TazzBazar handles checkout.</p>
        </div>
        <div className="accordion" data-reveal data-reveal-stagger>
          {policies.map((item) => {
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
                  <span className="policy-title">
                    <PolicyIcon type={item.iconType} />
                    <span>{item.title}</span>
                  </span>
                  <span className="policy-indicator">
                    {item.pending && (
                      <span className="pending-tag">Pending review</span>
                    )}
                    <Plus aria-hidden="true" />
                  </span>
                </button>
                <div
                  className="policy-content"
                  id={`policy-${item.id}`}
                  hidden={!expanded}
                  aria-hidden={!expanded}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <OrganicTransition tone="mint" />
    </section>
  );
}
