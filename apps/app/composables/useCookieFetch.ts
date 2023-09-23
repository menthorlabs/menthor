import { appendResponseHeader, H3Event } from "h3";

export const useCookieFetch = async (event: H3Event, url: string) => {
  const res = await $fetch.raw(url);
  const cookies = (res.headers.get("set-cookie") || "").split(",");
  for (const cookie of cookies) {
    appendResponseHeader(event, "set-cookie", cookie);
  }
  return res._data;
};
