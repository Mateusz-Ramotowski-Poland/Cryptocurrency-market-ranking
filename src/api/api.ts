import async from "async";
import { marketListItem, marketSummaryItem } from "../components/interfaces";
import { fetchData } from "./fetchData";

async function get(url: string): Promise<any> {
  const proxyServerURL = "https://thingproxy.freeboard.io/fetch/";
  const fullUrl = `${proxyServerURL}${url}`;

  return async.retry({ times: 20, interval: 300 }, async () => fetchData(fullUrl));
}

export const api = {
  get: get,
};
