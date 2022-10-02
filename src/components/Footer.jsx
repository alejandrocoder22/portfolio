import { BsGithub, BsLinkedin } from 'react-icons/Bs'
const Footer = () => {
  return (
    <footer>
      <div className='footer__wrapper'>
        <span>Alejandrocoder &copy; 2022</span>
        <div className='footer__icons'>
          <a href='https://github.com/alexdev22/' target='_blank' rel='noreferrer noopener'> <BsGithub className='footer__svg' /> </a>
          <a href='https://www.linkedin.com/in/alejandrolopezprieto/' target='_blank' rel='noreferrer noopener'>   <BsLinkedin className='footer__svg' /> </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
