import { useEffect } from 'react';

export function useEscapeKey(handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        handler(event);
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [handler, enabled]);
}
