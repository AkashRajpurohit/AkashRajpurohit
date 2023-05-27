import type { JSX } from 'solid-js/jsx-runtime';
import type { JSXElement } from 'solid-js';

type Props = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: JSXElement;
};

export default function CardLink(props: Props) {
  return (
    <>
      <div class='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />
      <a {...props}>
        <span class='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl' />
        <span class='relative z-10'>{props.children}</span>
      </a>
    </>
  );
}
