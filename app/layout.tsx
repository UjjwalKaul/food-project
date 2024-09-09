import type { Metadata } from 'next';
import './globals.css';
import Providers from './util/providers';

export const metadata: Metadata = {
  title: 'Delicious Recipes',
  description: 'All-In-One Recipe Search Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
