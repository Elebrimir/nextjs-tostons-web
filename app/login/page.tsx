'use client'

import { useState } from 'react'
import Image from 'next/image'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL // Obtiene la URL base de la API desde la variable de entorno
      const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      // Manejar la respuesta
      if (response.ok) {
        // Si el login es exitoso, redireccionar a la página de inicio
        window.location.href = '/' // Cambia por la ruta deseada
      } else {
        // Si la respuesta no es OK, manejar el error
        throw new Error(
          'Credenciales incorrectas. Por favor, inténtalo de nuevo.'
        )
      }
    } catch (error: unknown) {
      // Especifica el tipo de 'error' como 'unknown'
      if (error instanceof Error) {
        // Verifica si 'error' es una instancia de 'Error'
        setError(error.message)
      } else {
        setError('Ha ocurrido un error desconocido.') // Si 'error' no es de tipo 'Error', muestra un mensaje genérico
      }
    }
  }

  return (
    <section className='bg-gray-50 dark:bg-black'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a
          href='/'
          className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
        >
          {/* Aquí puedes ajustar la URL y el texto según tu aplicación */}
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full bg-white p-5 mr-5'
            src='/tostonet.svg'
            alt='Tostonet'
            width={120}
            height={120}
            priority
          />
          TOSTONS BOWL
        </a>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Iniciar sesión
            </h1>
            <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Tu email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='••••••••'
                />
              </div>
              <button
                type='submit'
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Iniciar sesión
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                ¿Aún no tienes una cuenta?{' '}
                <a
                  href='#'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Regístrate
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage
