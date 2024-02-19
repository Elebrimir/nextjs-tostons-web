'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

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

function PlayerList() {
  const [players, setPlayersData] = useState<PlayerData[]>([])
  const [users, setUsersData] = useState<UserData[]>([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/players')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((players) => {
        setPlayersData(players)
      })
      .catch((error) => {
        // Manejar el error
        console.error('Fetch error:', error)
      })
  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((users) => {
        setUsersData(users)
      })
      .catch((error) => {
        // Manejar el error
        console.error('Fetch error:', error)
      })
  }, [])

  return (
    <div
      className='grid place-items-center p-5 lg:p-8 bg-white border-b border-gray-200'
      style={{ maxHeight: '400px', overflowY: 'auto' }}
    >
      <ul role='list' className='divide-y divide-gray-200'>
        {players.map((player) => (
          <li key={player.id} className='flex justify-between gap-x-5 py-5'>
            <div className='flex min-w-0 gap-x-4'>
              {users.map((user) => {
                if (user.id === player.user_id) {
                  return (
                    <Image
                      key={user.id}
                      src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${user.nickname}`}
                      alt='Avatar'
                      width={32}
                      height={32}
                      className='flex-none rounded-full bg-gray-50'
                    />
                  )
                }
                return null // Si no se encuentra el usuario, devolver null
              })}
              <div className='min-w-0 flex-auto'>
                <p className='overflow-visible text-sm font-semibold leading-6 text-gray-900'>
                  {users.find((user) => user.id === player.user_id)?.nickname}
                </p>
                <p className='overflow-visible mt-1 text-xs leading-5 text-gray-500'>
                  NAF: {player.naf_number}
                </p>
              </div>
            </div>
            <div className='flex flex-wrap row-start-4 min-w-0 gap-x-4 mt-4 ml-5'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                🥇 / {player.win}
              </p>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                ❌ / {player.draw}
              </p>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                👎 / {player.lose}
              </p>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                🏈 / {player.touchdowns}
              </p>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                🤕 / {player.casualties}
              </p>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                💀💀💀 / {player.triple_skull}
              </p>
            </div>
            <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end mt-4'>
              <p className='text-sm leading-6 text-gray-900'>{player.race}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PlayerList
