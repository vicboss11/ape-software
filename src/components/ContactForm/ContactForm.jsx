import './ContactForm.scss'

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <div className='contact-form-group'>
        <label htmlFor='contact-name'>Nombre:</label>
        <input id='contact-name' type='text' />
      </div>

      <div className='contact-form-group'>
        <label htmlFor='contact-email'>Email:</label>
        <input id='contact-email' type='email' placeholder='example@email.com' />
      </div>

      <div className='contact-form-group'>
        <label htmlFor='contact-subject'>Asunto:</label>
        <input id='contact-subject' type='text' />
      </div>

      <div className='contact-form-group'>
        <label htmlFor='contact-query'>Consulta:</label>
        <textarea id='contact-query' />
      </div>

      <button className='contact-form-button'>
        Enviar
      </button>
    </form>
  )
}

export default ContactForm