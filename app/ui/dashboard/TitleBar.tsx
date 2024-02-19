'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface EditionData {
  year: number
  name: string
  // ...otras propiedades según la respuesta del API
}

function TitleBar() {
  const [data, setData] = useState<EditionData[]>([])

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL // Obtiene la URL
    fetch(`${apiUrl}/edition`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        // Manejar el error
        console.error('Fetch error:', error)
      })
  }, [])

  return (
    <div className='w-full p-5 flex items-center justify-center lg:flex'>
      <Image
        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] border border-none rounded-full bg-white mr-5'
        src='/tostonet.svg'
        alt='Tostonet'
        width={120}
        height={120}
        priority
      />
      <h1 className='mb-3 text-5xl font-extrabold text-center'>
        TOSTONS BOWL {data && data.length > 0 && data[0].year} <br />{' '}
        {data && data.length > 0 && data[0].name} {'Edition'}
      </h1>
    </div>
  )
}

export default TitleBar
