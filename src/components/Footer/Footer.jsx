import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.scss'
import { faFacebook, faGithub, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const pageLinks = [
  {
    title: 'Home',
    href: '#home'
  },
  {
    title: 'Productos',
    href: '#productos'
  },
  {
    title: 'Servicios',
    href: '#servicios'
  },
  {
    title: 'Conócenos',
    href: '#conocenos'
  },
  {
    title: 'Contacto',
    href: '#contacto'
  }
]

const socialNetworks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (<FontAwesomeIcon icon={faFacebook} />)
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (<FontAwesomeIcon icon={faInstagram} />)
  },
  {
    name: 'X',
    href: '#',
    icon: (<FontAwesomeIcon icon={faXTwitter} />)
  },
  {
    name: 'Github',
    href: 'https://github.com/VicBoss11',
    icon: (<FontAwesomeIcon icon={faGithub} />)
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (<FontAwesomeIcon icon={faYoutube} />)
  },
]

function CreativeCommons() {
  return (
    <a
      href='http://creativecommons.org/licenses/by/4.0/'
      target='_blank'
      rel='license noreferrer'
      style={{ right: '50px', bottom: '32.5px', position: 'absolute' }}
    >
      <img
        src='https://i.creativecommons.org/l/by/4.0/88x31.png'
        alt='Licencia de Creative Commons'
      />
    </a>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className='footer'>
        <div className='footer-container'>
          <nav className='footer-page-links'>
            {
              pageLinks.map(link => (
                <a key={link.title} href={link.href}>
                  {link.title}
                </a>
              ))
            }
          </nav>

          <div className='footer-social'>
            {
              socialNetworks.map(network => (
                <a
                  key={network.name}
                  href={network.href}
                  className='footer-social-link'
                  target='_blank noreferrer'
                >
                  <span className='footer-social-link-placeholder'>
                    {network.name}
                  </span>

                  {network.icon}
                </a>
              ))
            }
          </div>

          <p className='footer-info'>
            © {currentYear} Ape Software, Inc. Todos los derechos reservados.
          </p>
        </div>

        <CreativeCommons />
      </footer>
    </>
  )
}

export default Footer
