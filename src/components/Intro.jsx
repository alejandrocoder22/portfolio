
const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro__left'>
        <div className='intro__wrapper'>
          <h1 className='intro__h1'>Desarrollador Web Fullstack</h1>
        </div>
        <div className='intro__animation-bottom'>
          <h2 className='intro__h2'>Transformando las ideas en proyectos</h2>
          <button className='intro__button'>Contáctame</button>
          <button className='intro__button intro__button-darker'>Curriculo</button>

        </div>
      </div>
      <div className='intro__right'>
        <img className='intro__img' src='../img/intro-img.svg' />
      </div>

    </div>
  )
}

export default Intro
