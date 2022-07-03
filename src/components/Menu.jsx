import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <>
      <nav>
        <img className='nav__logo' src='../img/logo-portfolio.svg' />
        <Link to='/'>Proyectos</Link>
        <Link to='/sobre-mi'>Sobre Mi</Link>
        <Link to='/tecnologias'>Tecnologías</Link>
      </nav>
    </>
  )
}

export default Menu
