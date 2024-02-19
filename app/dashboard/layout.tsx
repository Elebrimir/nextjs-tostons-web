import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tostons Bowl Cup',
  description: 'Pàgina oficial del Torneo de la Tostons Bowl'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' className={inter.className}>
      {children}
    </html>
  )
}
