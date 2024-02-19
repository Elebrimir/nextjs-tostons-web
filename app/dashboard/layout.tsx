import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '../ui/dashboard/NavBar'
import TitleBar from '../ui/dashboard/TitleBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tostons Bowl Cup',
  description: 'Pàgina oficial del Torneo de la Tostons Bowl'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es' className={inter.className}>
      <body className='flex flex-col min-h-screen'>
        <header>
          <div className='mx-auto p-4'>
            <TitleBar />
            <Navbar />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
