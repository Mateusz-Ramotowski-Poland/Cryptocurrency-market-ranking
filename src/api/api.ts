import async from "async";
import { fetchData } from "./fetchData";

function get<Response>(url: string): any /* Promise<Response> */ {
  const proxyServerURL = "https://thingproxy.freeboard.io/fetch/";
  const fullUrl = `${proxyServerURL}${url}`;

  async.retry(
    { times: 1, interval: 600 },
    () => fetchData(fullUrl),
    function (err, result) {
      console.log(err, result);
    }
  );
}

export const api = {
  get: get,
};
