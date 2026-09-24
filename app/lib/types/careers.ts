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
  /**
   * Last day applications are accepted (inclusive). Accepts a `Date` or an
   * ISO date string (`'2026-09-23'`). Positions without a deadline stay open.
   */
  deadline?: Date | string;
};
