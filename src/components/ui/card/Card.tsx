import { twJoin } from 'tailwind-merge';
import type { JSXElement } from 'solid-js';

type Props = {
  class?: string;
  children: JSXElement;
};

export default function Card(props: Props): JSXElement {
  return (
    <div
      class={twJoin('group relative flex flex-col items-start', props.class)}
    >
      {props.children}
    </div>
  );
}
