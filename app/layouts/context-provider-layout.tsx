import { JobCareerProvider } from '@/context/career-context';
import { Toaster } from 'react-hot-toast';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { EmbeddedDevTools } from 'react-router-devtools';

type Props = {
  children: React.ReactNode;
};

export default function ContextProviderLayout({ children }: Props) {
  return (
    <JobCareerProvider>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
      <TanStackDevtools
        config={{ position: 'bottom-right', }}
        plugins={[
          {
            name: 'React Router',
            render: <EmbeddedDevTools />,defaultOpen:true
          },
        ]}
      />
      <TanStackDevtools />
    </JobCareerProvider>
  );
}
