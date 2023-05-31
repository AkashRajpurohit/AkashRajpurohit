import { createSignal, createResource, Suspense } from 'solid-js';
import { twJoin } from 'tailwind-merge';
import { RiBusinessMailSendLine } from 'solid-icons/ri';
import { FiLoader } from 'solid-icons/fi';

const postFormData = async (
  formData: FormData,
): Promise<{ message: string; error: boolean }> => {
  const response = await fetch('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  window.umami.track('Newsletter', { success: !data.error });

  return data;
};

const getTotalSubscribers = async (): Promise<number> => {
  const response = await fetch('/api/newsletter', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data.totalSubscribers;
};

type Props = {
  from_url?: string;
};

export default function NewsletterForm({ from_url = '' }: Props) {
  const [formData, setFormData] = createSignal<FormData>();
  const [response] = createResource(formData, postFormData);
  const [totalSubscribers] = createResource(getTotalSubscribers);

  function submit(e: SubmitEvent) {
    e.preventDefault();
    setFormData(new FormData(e.target as HTMLFormElement));
  }

  return (
    <form
      onSubmit={submit}
      class='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'
    >
      <h2 class='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <RiBusinessMailSendLine class='h-6 w-6 flex-none' />
        <span class='ml-3'>Stay up to date</span>
      </h2>
      <p class='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div class='mt-6 flex'>
        <input type='hidden' name='from_url' class='sr-only' value={from_url} />
        <input
          type='email'
          name='email'
          placeholder='Email address'
          aria-label='Email address'
          required
          class='min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/10 sm:text-sm'
        />
        <button
          type='submit'
          disabled={response.loading}
          class='inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 disabled:hover:bg-zinc-800 dark:disabled:hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-progress ml-4 flex-none'
        >
          {response.loading ? (
            <span class='px-1 text-primary-500'>
              <FiLoader class='animate-spin h-5 w-5' />
            </span>
          ) : (
            'Join'
          )}
        </button>
      </div>
      <div class='mt-2'>
        <Suspense
          fallback={
            <div
              role='status'
              class='animate-pulse mt-4 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48'
            />
          }
        >
          {!response() && totalSubscribers() && (
            <p class='text-sm font-light text-zinc-600 dark:text-zinc-400'>
              Join {totalSubscribers()} other subscribers.
            </p>
          )}
          {response() && (
            <p
              class={twJoin(
                'ml-2 text-sm font-medium',
                response()?.error
                  ? 'text-red-500 dark:text-red-400'
                  : 'text-green-500 dark:text-green-400',
              )}
            >
              {response()?.message}
            </p>
          )}
        </Suspense>
      </div>
    </form>
  );
}
