import type { JSX } from 'solid-js/jsx-runtime';

export default function MailIcon(props: JSX.SVGElementTags['svg']) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <title class='sr-only'>Mail Icon</title>
      <path
        fill-rule='evenodd'
        d='M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z'
      />
    </svg>
  );
}
