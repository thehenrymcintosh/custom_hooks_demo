import { useRef, useEffect, useCallback } from "react";


type callback = () => void;
type ClickListener = (ev: MouseEvent) => any

export const useClickOutside = <T extends Node>(callback: callback) => {
  const ref = useRef<T>();
  const cb = useCallback<ClickListener>((e) => {
    const {current} = ref;
    if (!current) return;
    if (current.contains(e.currentTarget as Node)) return;
    callback();
  }, [callback, ref.current]);

  useEffect(() => {
    document.addEventListener("click", cb);
    return () => {
      document.removeEventListener("click", cb);
    }
  }, [cb])
  return ref;
}

