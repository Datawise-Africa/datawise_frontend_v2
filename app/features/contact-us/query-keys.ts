export const contactUsKeys = {
  all: ['contact-us'] as const,
  submissions: () => [...contactUsKeys.all, 'submission'] as const,
};
