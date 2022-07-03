import Sidebar from '../components/Sidebar'
import proyects from '../data/proyects'
import { AiFillGithub } from 'react-icons/Ai'
import { FiLink } from 'react-icons/fi'

const Proyectos = () => {
  return (
    <>
      <Sidebar />
      <div className='main-container'>
        <h1 div class='proyects-title'>Proyectos</h1>

        <div className='proyects-container'>

          {proyects.map(proyect => {
            return (
              <div key={proyect.id} className='proyects-container__project'>
                <img className='proyects-container__project__img' src={proyect.url} />
                <div className='github-link'>
                  <a href='/'>
                    <AiFillGithub className='github-link__icon' />
                  </a>
                  <a href='/'>
                    <FiLink className='proyect-preview__icon' />
                  </a>
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </>
  )
}

export default Proyectos
