import { Inter } from 'next/font/google';
import Script from 'next/script';
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
        
        {/* Elfsight WhatsApp Chat | Untitled WhatsApp Chat */}
        <Script src="https://elfsightcdn.com/platform.js" async strategy="afterInteractive" />
        <div className="elfsight-app-bd4ba0ae-3aa2-4fec-ad91-c0ea0b3fab9e" data-elfsight-app-lazy></div>
      </body>
    </html>
  );
}
