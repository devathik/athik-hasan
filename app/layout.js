import { Inter } from 'next/font/google';
import Layout from '@/app/components/layout/Layout';
import '@/app/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Developers Portfolio',
  description: 'This is a portfolio for Web Developers',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
