import { twMerge } from 'tailwind-merge';
import type { JSXElement } from 'solid-js';

type Props = {
  decorate?: boolean;
  class?: string;
  children: JSXElement;
};

export default function CardEyebrow(props: Props): JSXElement {
  return (
    <p
      class={twMerge(
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        props.decorate && 'pl-3.5',
        props.class,
      )}
    >
      {props.decorate && (
        <span
          class='absolute inset-y-0 left-0 flex items-center'
          aria-hidden='true'
        >
          <span class='h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500' />
        </span>
      )}
      {props.children}
    </p>
  );
}
