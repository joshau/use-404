/**
 * Returns a promise that resolves to the dictionary for the received locale.
 *
 * When the promise is sent down as a prop, Next.js will stream to the browser the dictionary, it works
 * very similarly to how UI is streamed with Suspense, but in this case it's just data.
 */
export function loadDictionary(locale: string) {
  const dictionaryPromise = import(
    `@/languages/${locale.toLocaleLowerCase()}.json`
  ).then((mod) => mod.default);
  return dictionaryPromise;
}
