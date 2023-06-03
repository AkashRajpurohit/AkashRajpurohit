import type { JSX } from 'solid-js/jsx-runtime';

export default function HackerNewsIcon(props: JSX.SVGElementTags['svg']) {
  return (
    <svg
      x='0px'
      y='0px'
      width='24'
      height='24'
      viewBox='0 0 50 50'
      aria-hidden='true'
      {...props}
    >
      <title class='sr-only'>HackerNews Icon</title>
      <path d='M 4 4 L 4 5 L 4 46 L 46 46 L 46 4 L 4 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 12.652344 13 L 14.238281 15.947266 L 21 28.503906 L 21 36 L 21 38 L 23 38 L 27 38 L 29 38 L 29 36 L 29 28.503906 L 35.761719 15.947266 L 37.347656 13 L 34 13 L 30.824219 13 L 29.664062 13 L 29.087891 14.007812 L 25 21.158203 L 20.912109 14.007812 L 20.337891 13 L 19.177734 13 L 16 13 L 12.652344 13 z M 16 15 L 19.175781 15 L 25 25.1875 L 30.824219 15 L 34 15 L 27 28 L 27 36 L 23 36 L 23 28 L 16 15 z' />
    </svg>
  );
}
