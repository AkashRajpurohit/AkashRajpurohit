import { twMerge } from 'tailwind-merge';
import type { CollectionEntry } from 'astro:content';
import type { JSXElement } from 'solid-js';
import Card from '@components/ui/card/Card';
import CardTitle from '@components/ui/card/CardTitle';
import CardEyebrow from '@components/ui/card/CardEyebrow';
import CardDescription from '@components/ui/card/CardDescription';
import CardCta from '@components/ui/card/CardCta';
import type { PostClickedFrom } from '@lib/constants';

type Props = CollectionEntry<'blog'> & {
  class?: string;
  from?: PostClickedFrom;
};

export default function ArticleCard(props: Props): JSXElement {
  return (
    <div class={twMerge('flex flex-col gap-16', props.class)}>
      <Card class='h-full'>
        <CardEyebrow>
          {props.data.tags.map((tag) => (
            <span class='mr-2'># {tag}</span>
          ))}
        </CardEyebrow>
        <div class='flex-1'>
          <CardTitle
            href={`/blog/${props.slug}/`}
            from={props.from}
            class='group-hover:text-primary-500'
          >
            {props.data.title}
          </CardTitle>
          <CardDescription class='line-clamp-3'>
            {props.data.summary}
          </CardDescription>
        </div>
        <CardCta class='font-thin text-zinc-400 dark:text-zinc-500'>
          <time datetime={props.data.date.toISOString()}>
            {props.data.date.toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </time>
        </CardCta>
      </Card>
    </div>
  );
}
