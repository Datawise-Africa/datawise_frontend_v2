export const partnerKeys = {
  all: ['partners'] as const,
  submissions: () => [...partnerKeys.all, 'submission'] as const,
};
