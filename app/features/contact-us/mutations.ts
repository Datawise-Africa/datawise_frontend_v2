import { useMutation } from '@tanstack/react-query';
import { apiClient } from '~/lib/api/client';
import type { ContactUsFormData } from '~/schema/contact-us-schema';

export const useSubmitContactForm = () => {
  return useMutation({
    mutationFn: async (input: ContactUsFormData): Promise<void> => {
      await apiClient.post('/users/general-inquiry/', input);
    },
  });
};
