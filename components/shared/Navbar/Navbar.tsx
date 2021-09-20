import { Menu, Moon } from '@components/icons'
import { Container } from '@components/ui'
import Link from 'next/link'

/**
 * Navbar
 **/
const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header
      className="flex items-center sticky z-50 top-0 border-b-2 text-gray-600 bg-gray-100"
      style={{ minHeight: '64px' }}
    >
      <Container className="flex-1 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <a className="font-bold p-2 font-sans">
            AR<span className="text-gray-400">.</span>
          </a>
        </Link>

        {/* ACTIONS */}
        <div className="flex items-center space-x-4">
          {/* THEME */}
          <button className="p-2" aria-label="switch theme">
            <Moon />
          </button>
          {/* MENU BUTTON: removed from design */}
          {/* 
          <button className="p-2">
            <Menu />
          </button>
          */}
        </div>
      </Container>
    </header>
  )
}

// ***************************************************************************
// Props / Types
// ***************************************************************************
interface NavbarProps {}

// ***************************************************************************
// Exports
// ***************************************************************************
export default Navbar
