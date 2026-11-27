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
  /** ISO date the role was published. Required by Google for JobPosting results. */
  date_posted?: string;
  /** schema.org employmentType, e.g. 'INTERN', 'PART_TIME', 'FULL_TIME'. */
  employment_type?: 'INTERN' | 'PART_TIME' | 'FULL_TIME' | 'CONTRACTOR';
  /** Remote roles are marked as telecommute in structured data. */
  remote?: boolean;
  /** Role belongs to the Student Associate Programme; links to its page. */
  programme?: boolean;
};
