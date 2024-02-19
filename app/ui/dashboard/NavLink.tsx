// components/NavLink.js
import Link from 'next/link'

interface NavLinkProps {
  href: string
  text: string
}

const NavLink: React.FC<NavLinkProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <button className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'>
        <h2 className='mb-3 text-2xl font-semibold'>
          {text}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            -&gt;
          </span>
        </h2>
        <p className='m-0 max-w-[30ch] text-sm opacity-50 text-balance'>
          Acceso a {text}
        </p>
      </button>
    </Link>
  )
}

export default NavLink
