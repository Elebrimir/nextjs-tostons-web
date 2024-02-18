import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tostons Bowl Cup',
  description: 'Pàgina oficial del Torneo de la Tostons Bowl'
}

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
