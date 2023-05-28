import { headerNavLinks } from '@lib/config';
import { createSignal } from 'solid-js';

export default function MobileHeader() {
  const [showNav, setShowNav] = createSignal(false);

  const onToggleNav = () => {
    setShowNav((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <div class='sm:hidden'>
      <button
        type='button'
        class='w-8 h-8 py-1 mx-2 rounded'
        aria-label='Toggle Menu'
        onClick={onToggleNav}
      >
        <svg
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          class='text-zinc-900 dark:text-zinc-100'
        >
          <title class='sr-only'>Mobile Nav Hamburger</title>
          {showNav() ? (
            <path
              fill-rule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clip-rule='evenodd'
            />
          ) : (
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'
            />
          )}
        </svg>
      </button>
      <div
        class={`fixed w-full h-full top-24 right-0 bg-zinc-200 dark:bg-zinc-800 opacity-95 z-[9999] transform ease-in-out duration-300 ${
          showNav() ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type='button'
          aria-label='toggle modal'
          class='fixed w-full h-full cursor-auto focus:outline-none'
          onClick={onToggleNav}
        />
        <nav class='fixed h-full mt-8'>
          {headerNavLinks.map((link) => (
            <div class='px-12 py-4'>
              {/* rome-ignore lint/a11y/useValidAnchor: Need onClick to close the navbar when link is clicked */}
              <a
                href={link.href}
                class='text-2xl font-bold tracking-widest text-zinc-900 dark:text-zinc-100'
                onClick={onToggleNav}
              >
                {link.title}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
