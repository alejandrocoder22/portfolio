import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/Ai'
import { useState } from 'react'

const Contact = () => {
  const initialFormState = {
    subject: '',
    email: '',
    message: ''
  }
  const [form, setForm] = useState({ initialFormState })

  const onHandleForm = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault()
    fetch('https://email.centralserverapi.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })

    setForm(initialFormState)
  }
  return (
    <div className='contact-section'>
      <h2 id='contact'>Contacto</h2>
      <div className='contact-section__wrapper'>
        <form onSubmit={onHandleSubmit} className='contact-section__form' action='http://localhost:5002'>
          <label className='contact-section__label'>Asunto</label>
          <input onChange={(e) => onHandleForm(e)} value={form.subject} name='subject' type='text' />
          <label className='contact-section__label'>Correo</label>
          <input onChange={(e) => onHandleForm(e)} value={form.email} name='email' type='text' />
          <label className='contact-section__label' name='message'>Mensaje</label>
          <textarea onChange={(e) => onHandleForm(e)} value={form.message} name='message' />
          <button className='contact-section__button'>Enviar</button>
        </form>
        <div className='contact-section__right'>
          <div className='contact-section__email'>
            <div> contacto@alejandrocoder.com</div>
            <div> <AiOutlineMail className='contact-section__email-svg' /></div>
          </div>
          <div className='contact-section__links'>
            <div className='contact-section__link'> <AiFillGithub /></div>
            <div className='contact-section__link'><AiFillLinkedin /></div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
