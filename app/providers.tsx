import FlowWrapper from '@/components/Map/FlowWrapper';
import { AnalyticsWrapper } from '@/components/Providers/Analytics';
import { Toaster } from '@/components/ui/Toaster';
import { TooltipProvider } from '@/components/ui/Tooltip';
import { OpenAIConfigurationProvider } from '@/utils/providers/ConfigurationProvider';

interface ProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
	return (
		<>
			<OpenAIConfigurationProvider>
				<TooltipProvider>
					<FlowWrapper>{children}</FlowWrapper>
				</TooltipProvider>
			</OpenAIConfigurationProvider>
			<AnalyticsWrapper />

			<Toaster />
		</>
	);
}
