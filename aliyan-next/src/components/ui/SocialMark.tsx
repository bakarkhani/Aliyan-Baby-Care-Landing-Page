export function SocialMark({ kind }: { kind: string }) {
  if (kind === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (kind === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3.2"
          y="3.2"
          width="17.6"
          height="17.6"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="17.7" cy="6.6" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (kind === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M14 3v11.2a3.2 3.2 0 1 1-2.8-3.2V8.1a6.3 6.3 0 1 0 5.9 6.1V8.7c1.2.8 2.5 1.2 3.9 1.2V6.7c-3.1-.1-5-1.7-5.4-3.7H14Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3a8.8 8.8 0 0 0-7.6 13.3L3.2 21l4.9-1.3A8.9 8.9 0 1 0 12 3Zm0 15.8a7 7 0 0 1-3.6-1l-.3-.2-2.9.8.8-2.8-.2-.3A7 7 0 1 1 12 18.8Zm3.8-5.2c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.4-.5.3-.4c.1-.1 0-.3 0-.4s-.5-1.3-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.1.9 2.2c.1.2 1.6 2.4 3.8 3.3.5.2 1 .4 1.3.5.5.2 1 .2 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z"
        fill="currentColor"
      />
    </svg>
  );
}
