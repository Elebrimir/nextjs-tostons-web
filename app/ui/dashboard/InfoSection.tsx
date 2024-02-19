const InfoSection = () => {
  return (
    <div className='grid grid-cols-1 gap-6'>
      <div className='bg-white p-4 shadow rounded-lg flex flex-col'>
        <h2 className='text-lg font-bold mb-2 text-lime-800'>Noticia 1</h2>
        <p className='text-slate-700'>Contenido de la noticia 1...</p>
      </div>
      <div className='bg-white p-4 shadow rounded-lg flex flex-col'>
        <h2 className='text-lg font-bold mb-2 text-lime-800'>Noticia 2</h2>
        <p className='text-slate-700'>Contenido de la noticia 2...</p>
      </div>
      <div className='bg-white p-4 shadow rounded-lg flex flex-col'>
        <h2 className='text-lg font-bold mb-2 text-lime-800'>Noticia 3</h2>
        <p className='text-slate-700'>Contenido de la noticia 3...</p>
      </div>
    </div>
  )
}

export default InfoSection
