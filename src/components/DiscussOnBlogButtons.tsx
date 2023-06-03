import { twMerge } from 'tailwind-merge';
import HackerNewsIcon from './ui/icons/HackerNewsIcon';
import RedditIcon from './ui/icons/RedditIcon';
import TwitterIcon from './ui/icons/TwitterIcon';

type DiscussItem = {
  url: string;
  id: 'hackernews' | 'reddit' | 'twitter';
};

type Props = {
  discuss?: DiscussItem[];
};

const getDiscussButtonMetadata = (discussItem: DiscussItem) => {
  if (discussItem.id === 'hackernews') {
    return {
      className: 'bg-[#ff4000]',
      text: 'Discuss on HackerNews',
      Logo: HackerNewsIcon,
    };
  }

  if (discussItem.id === 'reddit') {
    return {
      className: 'bg-[#ff4500]',
      text: 'Discuss on Reddit',
      Logo: RedditIcon,
    };
  }

  if (discussItem.id === 'twitter') {
    return {
      className: 'bg-[#1da1f2]',
      text: 'Discuss on Twitter',
      Logo: TwitterIcon,
    };
  }
};

export default function DiscussOnBlogButtons({ discuss }: Props) {
  if (!discuss || discuss.length === 0) return null;

  return (
    <div class='flex flex-row gap-2 flex-wrap'>
      {discuss.map((discussItem) => {
        const metadata = getDiscussButtonMetadata(discussItem);
        if (!metadata) return null;

        return (
          <a
            href={discussItem.url}
            data-umami-event={`DiscussOnBlogButton - ${discussItem.id}`}
            data-umami-event-url={discussItem.url}
            class={twMerge(
              'p-2 rounded-md flex gap-2 font-semibold text-zinc-950',
              metadata.className,
            )}
          >
            <span class='h-6 w-6 inline-block text-zinc-100'>
              <metadata.Logo />
            </span>
            {metadata.text}
          </a>
        );
      })}
    </div>
  );
}
