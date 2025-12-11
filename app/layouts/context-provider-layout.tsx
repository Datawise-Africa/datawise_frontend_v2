import { JobCareerProvider } from '@/context/career-context';
import { Toaster } from 'react-hot-toast';

type Props = {
  children: React.ReactNode;
};

export default function ContextProviderLayout({ children }: Props) {
  return (
    <JobCareerProvider>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </JobCareerProvider>
  );
}
