import proyects from '../data/proyects'
import { AiFillGithub } from 'react-icons/ai'
import { FiLink } from 'react-icons/fi'

const Proyectos = () => {
  return (
    <>
      <div className='proyects-section wrapper'>
        <h2 id='proyects'>Proyectos</h2>
        <div className='proyects__container'>
          {proyects.map(proyect => {
            return (
              <div key={proyect.id} className='proyects__project'>
                <img className='proyects__img' src={proyect.imgUrl} />
                <div className='proyects__links-container mp'>
                  {
                    proyect.githubUrl && (
                      <a href={proyect.githubUrl} target='_blank' rel='noopener noreferrer'>
                        <AiFillGithub className='proyects__preview-icon' />
                      </a>
                    )
                  }
                  <a href={proyect.webUrl} target='_blank' rel='noopener noreferrer'>
                    <FiLink className='proyects__preview-icon ' />
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
