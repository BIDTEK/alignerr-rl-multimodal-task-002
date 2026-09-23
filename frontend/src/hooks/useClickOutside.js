import { useEffect } from 'react';

export function useClickOutside(ref, handler, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    function onClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [ref, handler, enabled]);
}
