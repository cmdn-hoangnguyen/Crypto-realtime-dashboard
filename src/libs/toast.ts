import { toast } from 'react-toastify';

const TOAST_ID = 'fetch-error-toast';

export const showErrorToast = (message: string) => {
  if (!toast.isActive(TOAST_ID)) {
    toast.error(message, {
      toastId: TOAST_ID,
    });
  }
};
