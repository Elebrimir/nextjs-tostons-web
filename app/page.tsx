import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='/'
            rel='noopener noreferrer'
          >
            By{' ELESTOR'}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className='dark:invert'
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full bg-white p-5'
          src='/tostonet.svg'
          alt='Tostonet'
          width={270}
          height={270}
          priority
        />
      </div>
      <h1 className='mb-3 text-6xl font-extrabold text-center'>TOSTONS BOWL CUP</h1>
      <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <a
          href='/dashboard'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Dashboard{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Acceso al Dashboard Personal del Torneo
          </p>
        </a>

        <a
          href='/media'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Media{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Acceso a la sección de Fotos y Videos
          </p>
        </a>

        <a
          href='/help'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Ayuda{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Preguntas y Respuestas más frecuentes
          </p>
        </a>

        <a
          href='http://localhost:8000/login'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Login{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Acceso al Login
          </p>
        </a>
      </div>
    </main>
  )
}
