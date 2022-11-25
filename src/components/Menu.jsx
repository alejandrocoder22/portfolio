import { useRef } from 'react'
import logoImage from '../images/logo-portfolio.svg'
import HamburgerMenu from './HamburgerMenu'
const Menu = () => {
  const responsiveNav = useRef()
  const hamburgerMenu = useRef()

  const onToggleNav = () => {
    responsiveNav.current.classList.toggle('responsive')
    hamburgerMenu.current.classList.toggle('hamburger-menu-clicked')
  }
  const onCloseMenu = () => {
    responsiveNav.current.classList.remove('responsive')
    hamburgerMenu.current.classList.remove('hamburger-menu-clicked')
  }
  return (
    <header className='header wrapper'>
      <a href='/'><img className='nav__logo' src={logoImage} /></a>
      <HamburgerMenu hamburgerMenu={hamburgerMenu} onToggleNav={onToggleNav} />
      <nav id='nav'>
        <div ref={responsiveNav} className='nav '>
          <a onClick={onCloseMenu} className='nav__a ' href='#about'>Sobre Mi</a>
          <a onClick={onCloseMenu} className='nav__a ' href='#proyects'>Proyectos</a>
          <a onClick={onCloseMenu} className='nav__a ' href='#techs'>Tecnologías</a>
          <a onClick={onCloseMenu} className='nav__a ' href='#contact'>Contacto</a>
        </div>
      </nav>
    </header>
  )
}

export default Menu
