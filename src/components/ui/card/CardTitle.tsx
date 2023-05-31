import { twMerge } from 'tailwind-merge';
import type { JSXElement } from 'solid-js';
import CardLink from './CardLink';

type Props = {
  href?: string;
  class?: string;
  children: JSXElement;
};

export default function CardTitle(props: Props): JSXElement {
  return (
    <h2
      class={twMerge(
        'text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100',
        props.class,
      )}
    >
      {props.href ? (
        <CardLink href={props.href}>{props.children}</CardLink>
      ) : (
        <>{props.children}</>
      )}
    </h2>
  );
}
