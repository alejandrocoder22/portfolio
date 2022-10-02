import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import proyects from '../data/proyects'

import { FiLink } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/Ai'

const IndividualProyectInfo = () => {
  const { id } = useParams()

  const [singleProyect, setSingleProyect] = useState()

  const filterProyect = () => {
    setSingleProyect(proyects.filter(proyect => proyect.id == id))
  }

  useEffect(() => {
    filterProyect()
  }, [])

  return (
    <>
      {singleProyect && (
        <main className='individual-proyect'>

          <h1 className='individual-proyect__h1'>{singleProyect[0].title}</h1>
          <img className='individual-proyect__img' src={singleProyect[0].imgUrlLarge} />
          <h2 className='individual-proyect__h2'>Objetivo</h2>
          <p className='individual-proyect__p'>{singleProyect[0].objetive}</p>
          <h2 className='individual-proyect__h2'>Tecnologías</h2>
          <ul>
            {singleProyect[0].techs.map(tech => <li className='individual-proyect__li' key={tech}>{tech}</li>
            )}
          </ul>
          <h2 className='individual-proyect__h2'>Funcionalidades</h2>
          <ul>
            {singleProyect[0].functions.map(func => <li className='individual-proyect__li' key={func}>{func}</li>
            )}
          </ul>
          <div className='individual-proyect__container-svgs'>
            <a href={singleProyect[0].webUrl} target='_blank' rel='noreferrer noopener'>  <FiLink className='individual-proyect__svg' /></a>
            <a href={singleProyect[0].githubUrl} target='_blank' rel='noreferrer noopener'>  <AiFillGithub className='individual-proyect__svg' /></a>
          </div>
          <Link to='/'>  <div>Back to Home</div></Link>
        </main>
      )}
    </>

  )
}

export default IndividualProyectInfo
