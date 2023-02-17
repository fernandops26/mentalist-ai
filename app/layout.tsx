import { AnalyticsWrapper } from '@/components/Providers/Analytics';
import '@/styles/globals.css';
import { TokenProvider } from '@/utils/providers/TokenProvider';

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
        <TokenProvider>{children}</TokenProvider>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
