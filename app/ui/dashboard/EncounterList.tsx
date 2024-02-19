'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface PlayerData {
  id: number
  user_id: number
  nickname: string
  naf_number: number
  race: string
  win: number
  draw: number
  lose: number
  points: number
  touchdowns: number
  casualties: number
  triple_skull: number
  // ...otras propiedades según la respuesta del API
}

interface UserData {
  id: number
  nickname: string
}

function EncounterList() {
  const [selectedRound, setSelectedRound] = useState('all')
  const [encounters, setEncounters] = useState([]) // Aquí deberías obtener tus encuentros desde la API
  const [players, setPlayers] = useState<PlayerData[]>([]) // Aquí deberías obtener tus jugadores desde la API
  const [users, setUsers] = useState<UserData[]>([]) // Aquí deberías obtener tus usuarios desde la API

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL // Obtiene la URL
    fetch(`${apiUrl}/players`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((players) => {
        setPlayers(players)
      })
      .catch((error) => {
        // Manejar el error
        console.error('Fetch error:', error)
      })
  }, [])

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL // Obtiene la URL
    fetch(`${apiUrl}/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((users) => {
        setUsers(users)
      })
      .catch((error) => {
        // Manejar el error
        console.error('Fetch error:', error)
      })
  }, [])

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL // Obtiene la URL
    fetch(`${apiUrl}/encounter`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((users) => {
        setEncounters(users)
      })
      .catch((error) => {
        // Manejar el error
        console.error('Fetch error:', error)
      })
  }, [])

  /*const filterByRound = (event) =>filterByRound
  const deleteEncounter = (id) => {
    // Lógica para eliminar un encuentro
  }*/

  return (
    <div className='grid place-items-center p-6 lg:p-8 bg-white border-b border-gray-200'>
      <h1 className='mt-8 text-3xl font-medium text-gray-900 border-b-4 mb-4'>
        Listado de Partidas por Ronda de la Tostons Bowl
      </h1>
      <div className='flex items-center mt-4 p-5 border border-spacing-1 rounded-2xl shadow-md'>
        <label htmlFor='roundFilter' className='mr-2'>
          Filtrar por Ronda:
        </label>
        <select
          id='roundFilter'
          className='border border-spacing-1 rounded-2xl shadow-md'
          value={selectedRound}
          //onChange={filterByRound}
        >
          <option value='all'>Todas las Rondas</option>
          {/* Debes mapear tus encuentros para crear las opciones del select */}
          {/* Ejemplo: encounters.map(encounter => (
              <option key={encounter.round_id} value={encounter.round_id}>Ronda {encounter.round_id}</option>
          )) */}
        </select>
      </div>
      <ul role='list' className='divide-y divide-gray-200'>
        {/* Debes mapear tus encuentros para crear la lista de encuentros */}
        {/* Ejemplo: encounters.map(encounter => (
            <li key={encounter.id} className="flex justify-between gap-x-6 py-5">
              ...
            </li>
        )) */}
      </ul>
    </div>
  )
}

export default EncounterList
