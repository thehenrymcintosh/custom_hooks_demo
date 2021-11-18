import { useEffect } from "react";

export const useElementClick = (selector: string, callback: (ev: MouseEvent) => any) => {
  useEffect(() => {
    function handleClick(ev: MouseEvent) {
      let {target} = ev;
      while (target && target instanceof Element) {
        if (target.matches(selector)) {
          return callback(ev);
        }
        target = target.parentElement;
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, [callback, selector]);
}