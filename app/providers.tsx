import FlowWrapper from '@/components/Map/FlowWrapper';
import { AnalyticsWrapper } from '@/components/Providers/Analytics';
import { Toaster } from '@/components/ui/Toaster';
import { OpenAIConfigurationProvider } from '@/utils/providers/ConfigurationProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <>
      <OpenAIConfigurationProvider>
        <FlowWrapper>{children}</FlowWrapper>
      </OpenAIConfigurationProvider>
      <AnalyticsWrapper />

      <Toaster />
    </>
  );
}
