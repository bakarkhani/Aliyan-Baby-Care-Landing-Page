'use client';

import { useState } from 'react';
import { PackageCheck, Plus, ShieldCheck, Truck } from 'lucide-react';
import { siteConfig } from '@/config/site';

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
      tabIndex={-1}
      aria-labelledby="information-title"
    >
      <div className="wrap info-layout">
        <div className="info-aside">
          <span className="eyebrow">Good to know</span>
          <h2 id="information-title">
            Find your favourites and order on TazzBazar.
          </h2>
          <p>Browse our products and order online.</p>
          <div className="mini-note">
            TazzBazar handles checkout.
          </div>
        </div>
        <div className="accordion">
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
    </section>
  );
}
