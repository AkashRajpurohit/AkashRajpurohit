import { twMerge } from 'tailwind-merge';
import type { JSXElement } from 'solid-js';

type Props = {
  class?: string;
  children: JSXElement;
};

export default function CardCta(props: Props): JSXElement {
  return (
    <div
      aria-hidden='true'
      class={twMerge(
        'relative z-10 mt-4 flex items-center text-sm font-medium text-primary-500',
        props.class,
      )}
    >
      {props.children}
    </div>
  );
}
