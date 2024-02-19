// components/Navbar.js
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <nav className='flex flex-col items-center justify-between p-6'>
      <div className='mb-10 grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-6 lg:text-center'>
        <NavLink href='/' text='Página Principal' />
        <NavLink href='/rounds' text='Rondas' />
        <NavLink href='/encounter' text='Partido' />
        <NavLink href='/clasification' text='Clasificación' />
        <NavLink href='/lists' text='Listados' />
        <NavLink href='/user' text='Perfil Usuario' />
      </div>
    </nav>
  )
}

export default Navbar
