import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adapt Business Solutions - CPA | Virtual Accounting Services Canada',
  description: 'Empowering Growth, Ensuring Value – Your CPA in Financial Excellence. Professional bookkeeping, compilations, tax planning, and financial strategy services across Canada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
