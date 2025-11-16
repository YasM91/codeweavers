import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './style/globals.css';
import { Provider } from '@components';

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Codeweavers',
  description: 'Codeweavers Task',
  keywords: ['codeweavers'],
  icons: {
    icon: ['/icons.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <main>
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
