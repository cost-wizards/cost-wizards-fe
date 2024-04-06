import axios from "axios";
import config from "config";

/**
 * Http Utility.
 */
const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: REQUEST_TIMEOUT.TIME,
});

export { http };
