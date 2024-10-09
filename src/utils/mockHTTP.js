export const mockHTTP = fn => {
  const mockAsyncDuration = 1000; // duration in miliseconds
  console.log(mockAsyncDuration);
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(fn);
    }, mockAsyncDuration);
  });
};
