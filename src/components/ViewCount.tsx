import type { ViewInput } from '@lib/constants';
import { formatNumber } from '@lib/utils';
import { createResource, Suspense } from 'solid-js';

const getViewCount = async (params: ViewInput): Promise<number> => {
  const response = await fetch('/api/views', {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data.totalViews;
};

type Props = ViewInput;

export default function ViewCount({ slug, type }: Props) {
  const [totalViews] = createResource({ slug, type }, getViewCount);

  return (
    <Suspense
      fallback={
        <div
          role='status'
          class='animate-pulse mt-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12'
        />
      }
    >
      <span>{formatNumber(totalViews() || 0)}</span>
    </Suspense>
  );
}
