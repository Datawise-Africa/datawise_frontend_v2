import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { env } from '~/lib/env';
import {
  getAuthToken,
  clearAuthFromInterceptor,
} from '~/contexts/auth-context';

const isDev = import.meta.env.DEV;

export const apiClient = axios.create({
  baseURL: env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (isDev) {
      // eslint-disable-next-line no-console
      console.log(
        `[API Request] ${config.method?.toUpperCase()} ${config.url}`
      );
    }

    const token = getAuthToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<{ message?: string; error?: string }>) => {
    if (isDev) {
      console.error('[API Error]', {
        url: error.config?.url,
        method: error.config?.method,
        status: error.response?.status,
        message: error.response?.data?.message || error.message,
      });
    }

    if (error.response?.status === 401) {
      clearAuthFromInterceptor();
    }

    return Promise.reject(error);
  }
);
