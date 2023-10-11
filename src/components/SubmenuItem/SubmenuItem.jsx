import { useContext } from 'react'
import { getLocalHref } from '../../utils/utils'
import { MenuContext } from '../../context/MenuContext'
import './SubmenuItem.scss'

function SubmenuItem({ parentId, title, activeClassName, handleIsActive }) {
  const menuContext = useContext(MenuContext)

  const handleCLick = (event) => {
    event.stopPropagation()

    handleIsActive()

    menuContext.setActiveMenuItemId(parentId)
  }

  return (
    <li
      className={`submenu-item ${activeClassName}`}
      onClick={(event) => handleCLick(event)}
    >
      <a
        href={getLocalHref(title)}
        className='submenu-item-anchor'
      >
        <span className='submenu-item-title'>
          {title}
        </span>
      </a>
    </li>
  )
}

export default SubmenuItem
