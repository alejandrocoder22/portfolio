import proyects from '../data/proyects'
import { AiFillGithub, AiOutlinePlus } from 'react-icons/Ai'
import { FiLink } from 'react-icons/fi'

const Proyectos = () => {
  return (
    <>
      <div className='proyects-section'>
        <h2 id='proyects'>Proyectos</h2>
        <div className='proyects__container'>
          {proyects.map(proyect => {
            return (
              <div key={proyect.id} className='proyects__project'>
                <img className='proyects__img' src={proyect.imgUrl} />
                <div className='proyects__links-container'>
                  {
                    proyect.githubUrl && (
                      <a href='/'>
                        <AiFillGithub className='proyects__preview-icon' />
                      </a>
                    )
                  }

                  <a href='/'>
                    <FiLink className='proyects__preview-icon' />
                  </a>
                  <a href={`/proyect/${proyect.id}`}>
                    <AiOutlinePlus className='proyects__preview-icon' />
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
