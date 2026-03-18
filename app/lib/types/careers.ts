import type { TsFixMe } from '~/types/glob';

export type JobCareerPositionType = {
  [key: string]: TsFixMe;
  id: string;
  title: string;
  overview: string;
  what_you_will_do: string[];
  qualifications: string[];
  bonus_qualifications: string[];
  what_we_offer: string[];
  link: string;
};
