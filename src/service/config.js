const devBaseURL = "https://httpbin.org";
const localBaseURLByApifox = "http://127.0.0.1:4523/m1/1730824-0-default";
const proBaseURL = "https://production.org";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? localBaseURLByApifox : proBaseURL;

export const TIMEOUT = 5000;
