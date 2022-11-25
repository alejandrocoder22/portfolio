import aboutImage from '../images/intro-photo.jpg'

const About = () => {
  return (
    <div className='about-section wrapper'>
      <div className='about-section__wrapper'>

        <h2 id='about'>Sobre Mi</h2>
        <div className='about-section__container'>

          <div className='about-section__left'>
            <p>Hola! Mi nombre es Alejandro y soy un apasionado de internet.</p>

            <p>Mis andaduras comenzaron con un simple blog donde quería contar a los demás mis experiencias. Cada día me iban surgiendo nuevas dudas e inquietudes que me impulsaban a ir evolucionando.</p>

            <p>Dejé Blogger y di el salto a Wordpress, donde me asaltaron nuevas preguntas:</p>

            <ul className='about-section__ul'>
              <li className='about-section__li bml'>¿Como puedo mejorar mi posición en los buscadores?</li>
              <li className='about-section__li bml'>¿Como puedo redactar para captar la atención de las personas?</li>
            </ul>

            <p>Esto me hizo pasar de ser un bloggero por curiosidad a un redactor freelance, pero no paré ahí:</p>

            <ul className='about-section__ul'>
              <li className='about-section__li bml'>¿Como puedo mejorar la velocidad de mi página?</li>
              <li className='about-section__li bml'>¿Como funciona Internet?</li>
            </ul>

            <p>Las preguntas se volvieron más técnicas, lo que me hizo separarme de redactar para otros a hacerlo para mi mismo, llegó la época del SEO. Después de esta etapa llegó la pregunta más importante de todas.</p>
            <ul className='about-section__ul'>
              <li className='about-section__li bml'>¿Cómo podría hacer mis propias páginas webs desde cero?</li>
            </ul>
            <p>Y fue ahí donde empezó mi independencia de Wordpress.</p>
          </div>

          <div className='about-section__right'>
            <img className='about-section__img' src={aboutImage} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
