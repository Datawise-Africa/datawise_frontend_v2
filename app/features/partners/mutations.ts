import { useMutation } from '@tanstack/react-query';
import { apiClient } from '~/lib/api/client';
import type { BecomePartnerFormData } from '~/schema/become-partner-schema';

export const useSubmitPartnerForm = () => {
  return useMutation({
    mutationFn: async (input: BecomePartnerFormData): Promise<void> => {
      await apiClient.post('/users/partner-interest/', input);
    },
  });
};
