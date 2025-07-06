import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SipSmrt',
  description: 'The SipSmrt Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
