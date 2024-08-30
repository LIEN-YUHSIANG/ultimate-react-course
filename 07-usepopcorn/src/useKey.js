import { useEffect } from 'react';

export function useKey(key, action) {
  // Listen to global keypress event
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener('keydown', callback);

      return function () {
        document.removeEventListener('keydown', callback);
      };
    },
    [action, key],
  );
}
