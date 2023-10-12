import Typewriter from '../Typewriter/Typewriter'
import './Header.scss'

function Header({ id }) {
  return (
    <header className='header'>
      <h1 id={id} className='header-title'>Ape Software</h1>

      <q className='header-slogan'>
        <Typewriter text={'"La imaginación'} delay={70}/>
        
        <Typewriter text={'en funcionamiento"'} delay={70}/>
      </q>
    </header>
  )
}

export default Header
