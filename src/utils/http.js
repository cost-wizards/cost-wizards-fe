import axios from "axios";

const BASE_URL = process.env.BASE_URL;

/**
 * Http Utility.
 */
const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { http };
