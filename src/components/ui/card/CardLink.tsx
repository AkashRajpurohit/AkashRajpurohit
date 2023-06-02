import type { JSX } from 'solid-js/jsx-runtime';
import type { JSXElement } from 'solid-js';
import type { PostClickedFrom } from '@lib/constants';

type Props = JSX.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: JSXElement;
  from?: PostClickedFrom;
};

export default function CardLink(props: Props) {
  const umamiEvents = props.from
    ? {
        ['data-umami-event']: `Post Navigation - ${props.from}`,
        ['data-umami-event-toUrl']: props.href,
      }
    : null;
  return (
    <>
      <div class='absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl' />
      <a {...umamiEvents} {...props}>
        <span class='absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl' />
        <span class='relative z-10'>{props.children}</span>
      </a>
    </>
  );
}
