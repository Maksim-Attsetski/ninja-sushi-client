import { RefObject, useEffect } from 'react';

type Handler = (event: MouseEvent) => void;

interface ICondition {
  if: boolean;
  dependencies: any[];
}

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  condition: ICondition = { if: false, dependencies: [] }
): void {
  useEffect(() => {
    if (condition.if) return;

    const onClick: Handler = (event) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, condition.dependencies);
}

export default useClickOutside;
