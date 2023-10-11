import { useContext } from 'react'
import { ComputerDesktopIcon, EnvelopeIcon, FilmIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { MenuContext } from '../../context/MenuContext'
import SidemenuItem from '../SidemenuItem/SidemenuItem'
import './Sidemenu.scss'

const menuItems = [
  {
    id: 'home',
    title: 'Home',
    icon: (<HomeIcon className='sidemenu-item-icon' />),
    hasMenu: false
  },
  {
    id: 'products',
    title: 'Productos',
    icon: (<FilmIcon className='sidemenu-item-icon' />),
    hasMenu: false
  },
  {
    id: 'services',
    title: 'Servicios',
    icon: (<ComputerDesktopIcon className='sidemenu-item-icon' />),
    hasMenu: false
  },
  {
    id: 'know-us',
    title: 'Conócenos',
    icon: (<UserGroupIcon className='sidemenu-item-icon' />),
    hasMenu: true,
    items: [
      {
        id: 'business-model',
        title: 'Modelo Empresarial'
      },
      {
        id: 'corporate-culture',
        title: 'Cultura Corporativa'
      },
      {
        id: 'corporate-governance',
        title: 'Gobierno corporativo'
      },
      {
        id: 'data-of-interest',
        title: 'Datos de Interés'
      },
    ]
  },
  {
    id: 'contact',
    title: 'Contacto',
    icon: (<EnvelopeIcon className='sidemenu-item-icon' />),
    hasMenu: false
  }
]

function Sidemenu() {
  const menuContext = useContext(MenuContext)

  const handleIsActive = (id) => {
    menuContext.setActiveMenuItemId(id)

    if (menuContext.activeSubmenuItemId) {
      menuContext.setActiveSubmenuItemId(undefined)
    }
  }

  const getActiveClassName = (id) =>
    menuContext.activeMenuItemId === id ? 'sidemenu-item--active' : ''

  return (
    <ul className='sidemenu'>
      {
        menuItems.map((item) => (
          <SidemenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            hasMenu={item.hasMenu}
            items={item?.items}
            activeClassName={getActiveClassName(item.id)}
            handleIsActive={() => handleIsActive(item.id)}
          >
            {item.icon}
          </SidemenuItem>
        ))
      }
    </ul>
  )
}

export default Sidemenu
