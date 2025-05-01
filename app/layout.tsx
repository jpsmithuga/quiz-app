/* app/layout.tsx */
import './styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Construction Quiz',
  description: 'Practice exam for construction topics',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}