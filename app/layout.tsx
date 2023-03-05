import { AnalyticsWrapper } from '@/components/Providers/Analytics';
import { Toaster } from '@/components/ui/Toaster';
import '@/styles/globals.css';
import { OpenAIConfigurationProvider } from '@/utils/providers/ConfigurationProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <OpenAIConfigurationProvider>{children}</OpenAIConfigurationProvider>
        <AnalyticsWrapper />

        <Toaster />
      </body>
    </html>
  );
}
