import React from 'react'
import TitleBar from '@/app/ui/dashboard/TitleBar'
import Navbar from '../ui/dashboard/NavBar'
import InfoSection from '../ui/dashboard/InfoSection'
import PlayerList from '../ui/dashboard/PlayerList'

export default function DashboardPage() {
  return (
    <body className='flex flex-col min-h-screen'>
      <header>
        <div className='mx-auto p-4'>
          <TitleBar />
          <Navbar />
        </div>
      </header>
      <main className='flex-grow'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto p-4'>
          <div className='grid p-10 m-5 gap-6 bg-slate-800 border border-slate-400 rounded-xl shadow-xl shadow-slate-400'>
            <InfoSection />
          </div>
          <div className='grid p-10 m-5 gap-6 bg-slate-800 border border-slate-400 rounded-xl shadow-xl shadow-slate-400 lg:col-span-2'>
            <div className='grid p-10 m-5 gap-6 bg-slate-800 border border-slate-400 rounded-xl'>
              <h1 className='mb-3 text-2xl text-center font-semibold'>
                LISTADO JUGADORES
              </h1>
              <PlayerList />
            </div>
            <div className='grid p-10 m-5 gap-6 bg-slate-800 border border-slate-400 rounded-xl'>
              <h1 className='mb-3 text-2xl text-center font-semibold'>
                EMPAREJAMIENTOS RONDA ACTUAL
              </h1>
            </div>
          </div>
        </div>
      </main>
    </body>
  )
}
