import { useContext } from 'react'
import { MenuContext } from '../../context/MenuContext'
import SubmenuItem from '../SubmenuItem/SubmenuItem'
import './Submenu.scss'

function Submenu({ parentId, menuItems, isCollapsed }) {
  const menuContext = useContext(MenuContext)

  const handleIsActive = (id) => menuContext.setActiveSubmenuItemId(id)

  const getActiveClassName = (id) =>
    menuContext.activeSubmenuItemId === id ? 'submenu-item--active' : ''

  return (
    <ul className={`submenu ${isCollapsed ? 'submenu--collapsed' : ''}`}>
      {
        menuItems.map((item) => (
          <SubmenuItem
            key={item.id}
            parentId={parentId}
            title={item.title}
            activeClassName={getActiveClassName(item.id)}
            handleIsActive={() => handleIsActive(item.id)}
          />
        ))
      }
    </ul>
  )
}

export default Submenu
