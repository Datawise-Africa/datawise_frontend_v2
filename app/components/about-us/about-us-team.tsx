import { useState } from 'react';
import { teamMembers } from '~/constants/navigation';
import { IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { FadeIn, StaggerChildren, StaggerItem } from '~/components/motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '~/components/ui/dialog';

type TeamMember = (typeof teamMembers)[number];

export default function AboutUsTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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

      <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <StaggerItem key={index}>
            <div className="group flex flex-col items-center bg-background dark:bg-background/50 rounded-2xl border border-border p-6 shadow-sm hover:shadow-lg transition-all duration-300 h-full">
              <div className="relative w-full aspect-square max-w-[280px] mb-4 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center text-center flex-1">
                <h4 className="text-xl font-semibold text-foreground">
                  {member.name}
                </h4>
                <p className="text-primary text-sm font-medium mt-1">
                  {member.title}
                </p>
                {member.description && (
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-3 max-w-xs">
                    {member.description}
                  </p>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="mt-4 text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors cursor-pointer"
                >
                  View Profile →
                </button>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>

      {/* Team Member Profile Modal */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={(open) => {
          if (!open) setSelectedMember(null);
        }}
      >
        {selectedMember && (
          <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader className="items-center text-center">
              <div className="w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full border-2 border-primary/20">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <DialogTitle className="text-2xl">
                {selectedMember.name}
              </DialogTitle>
              <p className="text-primary text-sm font-medium">
                {selectedMember.title}
              </p>
            </DialogHeader>

            {selectedMember.description && (
              <DialogDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                {selectedMember.description}
              </DialogDescription>
            )}

            <div className="flex items-center justify-center gap-3 mt-4">
              {selectedMember.linkedin_url && (
                <a
                  href={selectedMember.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-colors duration-200"
                >
                  <IconBrandLinkedin className="h-5 w-5" />
                </a>
              )}
              {selectedMember.email && (
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  <IconMail className="h-5 w-5" />
                </a>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
