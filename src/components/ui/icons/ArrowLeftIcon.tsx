import type { JSX } from 'solid-js/jsx-runtime';

export default function ArrowLeftIcon(props: JSX.SVGElementTags['svg']) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      {...props}
    >
      <title class='sr-only'>ArrowLeft Icon</title>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
      />
    </svg>
  );
}
