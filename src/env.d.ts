/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  umami: {
    // rome-ignore lint/suspicious/noExplicitAny: no specific guidelines for event data types
    track: (eventName: string, eventData?: Record<any, any>) => void;
  };
}
