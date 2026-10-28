type OrganicTransitionProps = {
  tone: 'cream' | 'alt' | 'mint';
  shape?: 'gentle' | 'rolling';
};

const paths = {
  gentle:
    'M0 46 C180 78 310 24 500 42 C720 64 850 82 1060 49 C1210 26 1320 31 1440 50 L1440 110 L0 110 Z',
  rolling:
    'M0 52 C190 18 310 79 510 57 C720 34 830 19 1030 49 C1190 74 1320 70 1440 38 L1440 110 L0 110 Z',
};

export function OrganicTransition({
  tone,
  shape = 'gentle',
}: OrganicTransitionProps) {
  return (
    <svg
      className={`organic-transition organic-transition--${tone}`}
      viewBox="0 0 1440 110"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[shape]} />
    </svg>
  );
}
