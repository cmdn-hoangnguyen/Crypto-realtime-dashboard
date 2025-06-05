import axios, { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

import { showErrorToast } from './toast';
import { AXIOS_ERROR_MESSAGES } from '../constants/data';
import { AXIOS_ERROR_CODE } from '../constants/errorEnum';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
});

const shownErrors = new Set<string>();

export const fetcher = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorCode = error.code || error.response?.status?.toString() || 'unknown';

      if (!shownErrors.has(errorCode)) {
        shownErrors.add(errorCode);

        if (!error.response) {
          if (error.code === AXIOS_ERROR_CODE.TIMEOUT) {
            showErrorToast(AXIOS_ERROR_MESSAGES[AXIOS_ERROR_CODE.TIMEOUT]);
          } else {
            showErrorToast(AXIOS_ERROR_MESSAGES.NO_RESPONSE);
          }
        } else {
          const status = error.response.status;
          if (status === AXIOS_ERROR_CODE.TOO_MANY_REQUESTS) {
            showErrorToast(AXIOS_ERROR_MESSAGES[AXIOS_ERROR_CODE.TOO_MANY_REQUESTS]);
          }
        }

        setTimeout(() => {
          shownErrors.delete(errorCode);
        }, 5000);
      }
    } else {
      toast.error('Unexpected error occurred.');
    }

    throw error;
  }
};
