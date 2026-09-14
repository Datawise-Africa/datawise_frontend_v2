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
  /** Set `former: true` in team data to hide someone without deleting their entry. */
  former?: boolean;
};

export function useTeamMembers(): TeamMember[] {
  return useMemo(
    () =>
      (teamMembersData as Omit<TeamMember, 'id'>[])
        .map((member, index) => ({
          ...member,
          id: String(index.toString(32)),
        }))
        .filter((member) => !member.former),
    []
  );
}
