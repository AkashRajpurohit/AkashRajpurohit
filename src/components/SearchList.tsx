import type { CollectionEntry } from 'astro:content';
import fuzzysort from 'fuzzysort';
import {
  Show,
  createSignal,
  createMemo,
  createEffect,
  onMount,
} from 'solid-js';
import ArticleCard from './ui/ArticleCard';
import { getRandomPostTitle } from '@lib/utils';

const options = {
  keys: ['data.title', 'data.summary', 'slug'],
  limit: 20, // don't return more results than you need!
  threshold: -10000, // don't return bad results
};

type Props = {
  searchList: CollectionEntry<'blog'>[];
};

export default function SearchList({ searchList }: Props) {
  const [query, setQuery] = createSignal('');

  const posts = createMemo(() => {
    if (!query() || query().trim().length === 0) return searchList;

    return fuzzysort
      .go(query(), searchList, options)
      .map((result) => result.obj);
  });

  // initialize query from URL
  onMount(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const initialQuery = searchParams.get('q') || '';
      setQuery(initialQuery);
    }
  });

  // Update URL query parameter when the query changes
  createEffect(() => {
    if (!query() || query().trim().length === 0) {
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    } else {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('q', query());
      const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
      window.history.replaceState({}, '', newUrl);
    }
  });

  const randomPostTitle =
    posts().length > 0 ? getRandomPostTitle(posts()) : 'Search blogs...';

  return (
    <div>
      <label
        for='search'
        class='sr-only mb-2 text-sm font-medium text-zinc-900 dark:text-white'
      >
        Search
      </label>
      <div class='relative'>
        <div class='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            aria-hidden='true'
            class='h-5 w-5 text-zinc-500 dark:text-zinc-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </div>
        <input
          class='block w-full rounded-lg border border-zinc-300 bg-zinc-50 p-2 pl-10 text-sm text-zinc-900 focus:border-primary-500 focus:outline-primary-500 focus:ring-primary-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:placeholder-zinc-400 dark:focus:border-primary-500 dark:focus:ring-primary-500'
          placeholder={`Try "${randomPostTitle}"`}
          required
          id='search'
          onInput={(e) => setQuery(e.target.value)}
          value={query()}
        />
      </div>

      <Show when={posts().length > 0}>
        <main class='mt-12'>
          <section>
            <div
              role='list'
              class='grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'
            >
              {posts().map((post) => (
                <ArticleCard {...post} />
              ))}
            </div>
          </section>
        </main>
      </Show>

      <Show when={posts().length === 0}>
        <div class='flex justify-center py-8'>
          <p class='font-medium tracking-wide text-zinc-500 dark:text-zinc-400'>
            🙅🏻‍♂️ No results found, try something else
          </p>
        </div>
      </Show>
    </div>
  );
}
