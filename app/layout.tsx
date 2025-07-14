import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/common/Providers'

export const metadata: Metadata = {
  title: 'pixelio',
  description: 'pixelio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
