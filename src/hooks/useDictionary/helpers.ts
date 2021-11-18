export function debounce<A extends Array<any>, T>(f: (...args: A) => Promise<T>, interval: number) {
  let timer : NodeJS.Timeout | null = null;

  return (...args: A) : Promise<T> => {
    if (timer) clearTimeout(timer);
    return new Promise((resolve) => {
      timer = setTimeout(
        () => resolve(f(...args)),
        interval,
      );
    });
  };
}
