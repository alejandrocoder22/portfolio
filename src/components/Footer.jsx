import { BsGithub, BsLinkedin } from 'react-icons/Bs'

const currentYear = new Date().getFullYear()
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <span>Alejandrocoder &copy; {currentYear}</span>
        <div className='footer__icons'>
          <a href='https://github.com/alejandrocoder22/' target='_blank' rel='noreferrer noopener'> <BsGithub className='footer__svg ' /> </a>
          <a href='https://linkedin.com/in/alejandrocoder' target='_blank' rel='noreferrer noopener'>   <BsLinkedin className='footer__svg mml' /> </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
