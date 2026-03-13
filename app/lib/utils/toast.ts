import { createElement } from 'react';
import toast from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'info' | 'warning';

const DURATION: Record<ToastType, number> = {
  success: 3000,
  error: 4000,
  info: 4000,
  warning: 4000,
};

function showCustomToast(type: ToastType, title: string, message?: string) {
  import('~/components/ui/custom-toast').then(({ CustomToast }) => {
    toast.custom(
      (t) =>
        createElement(CustomToast, {
          toast: t,
          title,
          message: message || '',
          type,
          onDismiss: () => toast.dismiss(t.id),
        }),
      { duration: DURATION[type] }
    );
  });
}

/**
 * Toast utility functions with custom designs
 */

export const toastUtils = {
  success: (title: string, message?: string) =>
    showCustomToast('success', title, message),
  error: (title: string, message?: string) =>
    showCustomToast('error', title, message),
  info: (title: string, message?: string) =>
    showCustomToast('info', title, message),
  warning: (title: string, message?: string) =>
    showCustomToast('warning', title, message),

  /**
   * Show loading toast and return its ID
   */
  loading: (message: string) => {
    return toast.loading(message);
  },

  /**
   * Dismiss a specific toast by ID
   */
  dismiss: (toastId: string) => {
    toast.dismiss(toastId);
  },

  /**
   * Show promise toast - automatically handles loading, success, and error states
   */
  promise: <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((err: Error) => string);
    }
  ) => {
    return toast.promise(promise, messages);
  },

  /**
   * Custom toast with custom options
   */
  custom: (message: string, options?: Parameters<typeof toast>[1]) => {
    toast(message, options);
  },
};

/**
 * Pre-configured toast messages for common actions
 */
export const toastMessages = {
  create: {
    success: (entity: string) => ({
      title: 'Success!',
      message: `${entity} has been created successfully.`,
    }),
    error: (entity: string) => ({
      title: 'Creation Failed',
      message: `Failed to create ${entity}. Please try again.`,
    }),
  },
  update: {
    success: (entity: string) => ({
      title: 'Updated!',
      message: `${entity} has been updated successfully.`,
    }),
    error: (entity: string) => ({
      title: 'Update Failed',
      message: `Failed to update ${entity}. Please try again.`,
    }),
  },
  delete: {
    success: (entity: string) => ({
      title: 'Deleted!',
      message: `${entity} has been deleted successfully.`,
    }),
    error: (entity: string) => ({
      title: 'Deletion Failed',
      message: `Failed to delete ${entity}. Please try again.`,
    }),
  },
  fetch: {
    error: (entity: string) => ({
      title: 'Loading Failed',
      message: `Failed to load ${entity}. Please try again.`,
    }),
  },
};

// Re-export toast for direct access if needed
export { toast };
