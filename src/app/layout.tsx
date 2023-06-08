import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'shunsuke',
  description: "shunsuke's website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-slate-700 flex items-center justify-center`}>
        {children}
      </body>
    </html>
  );
}
