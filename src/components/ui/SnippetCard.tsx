import type { CollectionEntry } from 'astro:content';
import type { JSXElement } from 'solid-js';
import Card from '@components/ui/card/Card';
import CardTitle from '@components/ui/card/CardTitle';
import CardDescription from '@components/ui/card/CardDescription';

type Props = CollectionEntry<'snippets'> & {
  class?: string;
};

const logoBaseUrl = '/static/logos';

export default function SnippetCard(props: Props): JSXElement {
  return (
    <li>
      <Card>
        <div class='relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
          <img
            src={`${logoBaseUrl}/${props.data.logo}`}
            alt={`Logo of ${props.data.logo}`}
            class='h-8 w-8'
          />
        </div>
        <CardTitle
          href={`/snippets/${props.slug}/`}
          class='group-hover:text-primary-500 mt-6'
        >
          {props.data.title}
        </CardTitle>
        <CardDescription>{props.data.summary}</CardDescription>
      </Card>
    </li>
  );
}
