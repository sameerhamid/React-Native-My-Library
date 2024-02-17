import {useRef} from 'react';

// with Debounce Function for stoping multiple clicks to a button
export const WithDebounce = (
  callback: (_arg0: string[]) => void,
  timeBlocked: number = 700,
): ((..._calbackArgs: string[]) => void) => {
  const isBlockedRef = useRef<boolean>(false);
  const unblockTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  return (...callbackArgs: string[]) => {
    if (!isBlockedRef.current) {
      callback(callbackArgs);
    }
    clearTimeout(unblockTimeout.current);
    unblockTimeout.current = setTimeout(() => {
      isBlockedRef.current = false;
    }, timeBlocked);
    isBlockedRef.current = true;
  };
};
