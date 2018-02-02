export function request(url, options) {
  return fetch(url, options)
  .then((response) => response)
  .catch((error) => error);
}
