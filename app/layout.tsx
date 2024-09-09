import type { Metadata } from 'next';
import './globals.css';
import Providers from './util/providers';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';

export const metadata: Metadata = {
  title: 'Delicious Recipes',
  description: 'All-In-One Recipe Search Website',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
