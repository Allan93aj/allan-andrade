// src/app/layout.tsx
import React from 'react'
import './globals.css';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Allan Andrade',
  description: 'Portfólio de Allan Andrade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <div className="layout">
          <Header />

          {/* conteudo da home */}
          <main className="flex-1">{children}</main>

          <Footer />
        </div>

      </body>
    </html>
  )
}
