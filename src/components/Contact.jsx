import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/Ai'
import { useState } from 'react'
import EmailConfirmationPopup from './EmailConfirmationPopup'
import { sendEmail } from '../services/sendEmail'

const Contact = () => {
  const initialFormState = {
    subject: '',
    email: '',
    message: ''
  }
  const [form, setForm] = useState({ initialFormState })
  const [emailPopup, setEmailPopup] = useState('')

  const onHandleForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    setEmailPopup('Enviando mensaje...')

    sendEmail(form)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          setEmailPopup('Mensaje enviado')
          setTimeout(() => setEmailPopup(''), 2500)
        } else {
          setEmailPopup('No se ha podido enviar el mensaje')
        }
      })

    setForm(initialFormState)
  }

  return (
    <div className='contact-section wrapper'>
      <h2 id='contact'>Contacto</h2>
      <div className='contact-section__wrapper'>
        <form onSubmit={onHandleSubmit} className='contact-section__form' action='http://localhost:5002'>
          <label className='contact-section__label'>Asunto</label>
          <input onChange={(e) => onHandleForm(e)} value={form.subject} required name='subject' type='text' />
          <label className='contact-section__label'>Correo</label>
          <input onChange={(e) => onHandleForm(e)} value={form.email} required name='email' type='text' />
          <label className='contact-section__label' name='message'>Mensaje</label>
          <textarea onChange={(e) => onHandleForm(e)} value={form.message} required name='message' />
          <div className='contact-section__button-wrapper mt-1'>
            <button className='contact-section__button '>Enviar Mensaje</button>
            {emailPopup.length > 0 && <EmailConfirmationPopup msg={emailPopup} />}
          </div>
        </form>
        <div className='contact-section__right'>
          <div className='contact-section__email'>
            <p className='word-break'>contacto@alejandrocoder.com</p>
            <AiOutlineMail className='contact-section__email-svg' />
          </div>
          <div className='contact-section__links'>
            <a href='https://github.com/alejandrocoder22/' rel=' noreferrer noopener ' target='_blank' className='contact-section__link'> <AiFillGithub /></a>
            <a href='https://linkedin.com/in/alejandrocoder' rel=' noreferrer noopener ' target='_blank' className='contact-section__link'> <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
