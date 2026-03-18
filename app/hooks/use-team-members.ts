import { useMemo } from 'react';
import { teamMembersData } from '~/lib/data/team';

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
  linkedin_url: string;
  twitter_url: string;
};

export function useTeamMembers(): TeamMember[] {
  return useMemo(
    () =>
      teamMembersData.map((member, index) => ({
        ...member,
        id: String(index.toString(32)),
      })),
    []
  );
}
