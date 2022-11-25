
const HamburgerMenu = ({ onToggleNav, hamburgerMenu }) => {
  return (
    <div ref={hamburgerMenu} onClick={onToggleNav} className='hamburger-menu'>
      <div className='hamburger-menu__line' />
      <div className='hamburger-menu__line' />
      <div className='hamburger-menu__line' />
    </div>
  )
}

export default HamburgerMenu
