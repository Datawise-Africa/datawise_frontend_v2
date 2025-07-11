import axios from "axios";

export function useApi() {
  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";
  const api = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return api;
}
