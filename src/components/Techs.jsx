import htmlLogo from '../images/html5.png'
import cssLogo from '../images/css.png'
import javascriptLogo from '../images/javascript.png'
import sqltLogo from '../images/sql.png'
import reactLogo from '../images/react.png'
import nodeLogo from '../images/node.png'
import gitLogo from '../images/git.png'
import SingleTech from './SingleTech'

const Techs = () => {
  return (
    <div className='techs-section wrapper'>
      <h2 id='techs'>Tecnologías</h2>
      <div className='techs-section__techs-container'>
        <SingleTech image={htmlLogo} />
        <SingleTech image={cssLogo} />
        <SingleTech image={javascriptLogo} />
        <SingleTech image={sqltLogo} />
        <SingleTech image={reactLogo} />
        <SingleTech image={nodeLogo} />
        <SingleTech image={gitLogo} />
      </div>
    </div>
  )
}

export default Techs
