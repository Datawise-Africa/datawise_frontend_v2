import { useState } from 'react';
import { useTeamMembers, type TeamMember } from '~/hooks/use-team-members';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '~/components/ui/dialog';

export default function AboutUsTeam() {
  const teamMembers = useTeamMembers();
  const [_selectedMember, _setSelectedMember] = useState<TeamMember | null>(
    null
  );

  return (
    <div className="w-full">
      <FadeIn direction="up">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">
            Our Team
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Meet the Minds Behind Datawise Africa
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            A diverse team of researchers, engineers, and innovators united by a
            shared vision.
          </p>
        </div>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <StaggerItem key={index}>
            <div className="group flex flex-col bg-background dark:bg-background/50 rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center text-center px-4 py-3">
                <h4 className="text-base font-semibold text-foreground">
                  {member.name}
                </h4>
                <p className="text-primary text-sm font-medium mt-0.5">
                  {member.title}
                </p>
                {member.linkedin_url && (
                  <a
                    href={member.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center w-9 h-9 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors duration-200"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <IconBrandLinkedin className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Team Member Profile Modal — retained but not currently triggered */}
      <Dialog
        open={!!_selectedMember}
        onOpenChange={(open) => {
          if (!open) _setSelectedMember(null);
        }}
      >
        {_selectedMember && (
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader className="items-center text-center">
              <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full border-2 border-primary/20">
                <img
                  src={_selectedMember.image}
                  alt={_selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogTitle className="text-2xl">
                {_selectedMember.name}
              </DialogTitle>
              <p className="text-primary text-sm font-medium">
                {_selectedMember.title}
              </p>
            </DialogHeader>

            {_selectedMember.description && (
              <DialogDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                {_selectedMember.description}
              </DialogDescription>
            )}
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
