import type { JSX } from 'solid-js/jsx-runtime';

export default function ChevronRightIcon(props: JSX.SVGElementTags['svg']) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      {...props}
    >
      <title class='sr-only'>ChevronRight Icon</title>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M8.25 4.5l7.5 7.5-7.5 7.5'
      />
    </svg>
  );
}
