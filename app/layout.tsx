import './globals.css';
import { Inter, Roboto_Slab } from 'next/font/google';

import IsLoggedIn from './is_logged_in';

const inter = Inter({ subsets: ['latin'] });
const roboto_slab = Roboto_Slab({ subsets: ['latin'] });

export const metadata = {
  title: 'Netflix',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto_slab.className}>
        <IsLoggedIn>{children}</IsLoggedIn>
      </body>
    </html>
  );
}
