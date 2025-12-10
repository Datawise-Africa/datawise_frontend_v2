import axios from 'axios';
export default function useGptApi() {
  const BASE_URL = 'https://gpt.datawiseafrica.com';
  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return client;
}
