export const mockHTTP = fn => {
  const mockAsyncDuration = 1000; // duration in miliseconds

  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(fn);
    }, mockAsyncDuration);
  });
};
