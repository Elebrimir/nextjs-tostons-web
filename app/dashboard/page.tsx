import React from 'react'
import InfoSection from '../ui/dashboard/InfoSection'
import PlayerList from '../ui/dashboard/PlayerList'

export default function DashboardPage() {
  return (
    <main className='flex-grow'>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto p-4 gap-5'>
        <div className='grid p-5 m-1 gap-6 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 rounded-xl'>
          <InfoSection />
        </div>
        <div className='grid p-1 m-0 gap-6 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 rounded-xl lg:col-span-2'>
          <div className='grid p-1 m-3 gap-6 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 rounded-xl'>
            <h1 className='mt-5 text-2xl text-center font-semibold'>
              LISTADO JUGADORES
            </h1>
            <PlayerList />
          </div>
          <div className='grid p-5 m-1 gap-6 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 rounded-xl'>
            <h1 className='mb-3 text-2xl text-center font-semibold'>
              EMPAREJAMIENTOS RONDA ACTUAL
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}
