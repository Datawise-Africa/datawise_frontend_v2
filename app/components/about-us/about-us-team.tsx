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

          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            A diverse team of researchers, engineers, and innovators united by a
            shared vision.
          </p>
        </div>
      </FadeIn>

      <StaggerChildren className="flex flex-wrap justify-center gap-x-8 gap-y-12">
        {teamMembers.map((member, index) => (
          <StaggerItem key={index} className="w-50 sm:w-55">
            <div className="group flex flex-col items-center text-center">
              <div className="relative rounded-full p-1 ring-2 ring-primary/70 group-hover:ring-primary transition-all duration-300">
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {member.linkedin_url && (
                  <a
                    href={member.linkedin_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-1 right-1 flex items-center justify-center w-9 h-9 rounded-full bg-[#0A66C2] text-white shadow-md ring-2 ring-background hover:scale-110 transition-transform duration-200"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <IconBrandLinkedin className="h-4 w-4" />
                  </a>
                )}
              </div>

              <h4 className="mt-4 text-base font-semibold text-foreground">
                {member.name}
              </h4>
              <p className="text-muted-foreground text-sm mt-0.5">
                {member.title}
              </p>
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
