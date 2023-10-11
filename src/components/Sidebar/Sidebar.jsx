import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import apeSoftwareLogo from '../../assets/ape-software.svg'
import apeSoftwareMinLogo from '../../assets/ape-software-min.svg'
import Sidemenu from '../Sidemenu/Sidemenu'
import './Sidebar.scss'

function Sidebar() {
  const [isOpened, setIsOpened] = useState(false)

  const headerImage = isOpened ? apeSoftwareLogo : apeSoftwareMinLogo

  const toogleSidebar = () => setIsOpened(!isOpened)

  return (
    <nav className={`sidebar ${isOpened ? 'sidebar--open' : ''}`}>
      <header className='sidebar-header'>
        <img className='sidebar-header-image' src={headerImage} alt='Ape Software logo' />
      </header>

      <button className='sidebar-button' onClick={toogleSidebar}>
        <Bars3Icon className='sidebar-button-icon' />
      </button>

      <Sidemenu />
    </nav>
  )
}

export default Sidebar
