import NavMenu from '@/app/Components/NavMenu/NavMenu';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/AuthProvider';

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode;
};

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: Props) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavMenu />
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  )
}
