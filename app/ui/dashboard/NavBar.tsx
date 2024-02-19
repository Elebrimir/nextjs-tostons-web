// components/Navbar.js
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <nav className='flex flex-col items-center justify-between p-6'>
      <div className='mb-10 grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-6 lg:text-center'>
        <NavLink href='/' text='Página Principal' />
        <NavLink href='/dashboard/rounds' text='Rondas' />
        <NavLink href='/dashboard/encounter' text='Partido' />
        <NavLink href='/dashboard/classification' text='Clasificación' />
        <NavLink href='/dashboard/lists' text='Listados' />
        <NavLink href='/user' text='Perfil Usuario' />
      </div>
    </nav>
  )
}

export default Navbar
