import type { ReactNode } from 'react';

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
  testId,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  testId?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      data-testid={testId}
    >
      {children}
    </a>
  );
}
