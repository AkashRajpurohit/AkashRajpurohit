import { twMerge } from 'tailwind-merge';
import type { JSXElement } from 'solid-js';

type Props = {
  class?: string;
  children: JSXElement;
};

export default function CardDescription(props: Props): JSXElement {
  return (
    <p
      class={twMerge(
        'relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400',
        props.class,
      )}
    >
      {props.children}
    </p>
  );
}
