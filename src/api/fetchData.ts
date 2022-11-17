import { CONTENT_TYPE_KEY, CONTENT_TYPE } from "./constants";

export function fetchData(url: string): Promise<unknown> {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error("Response not ok", { cause: response });

    if (response.status === 204 || response.headers.get(CONTENT_TYPE_KEY) === CONTENT_TYPE.TEXT) {
      return response.text();
    }

    if (response.headers.get(CONTENT_TYPE_KEY)?.includes(CONTENT_TYPE.JSON)) {
      return response.json();
    }
    throw new Error("Unhandled response headers", { cause: response });
  });
}
