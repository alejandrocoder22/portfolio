import introImage from '../images/intro-img.svg'
import backgroundEffect from '../images/effect-background.svg'
const Intro = () => {
  return (
    <div className='intro wrapper'>
      <div className='intro__left'>
        <div className='intro__wrapper'>
          <h1 className='intro__h1'>Desarrollador Web Fullstack</h1>
        </div>
        <div className='intro__animation-bottom'>
          <h2 className='intro__h2'>Transformando las ideas en proyectos</h2>
          <a href='#contact'><button className='intro__button'>Contáctame</button></a>
        </div>
      </div>
      <div className='intro__right'>
        <img className='intro__img' src={introImage} />
      </div>
      <img className='intro__background-effect-right' src={backgroundEffect} alt='' />
    </div>
  )
}

export default Intro
