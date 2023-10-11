import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { getLocalHref } from '../../utils/utils'
import Submenu from '../Submenu/Submenu'
import './SidemenuItem.scss'

function SidemenuItemWithSubmenu({ children, id, title, items, activeClassName, handleIsActive }) {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    handleIsActive()
    setIsCollapsed(!isCollapsed)
  }

  return (
    <li
      className={`sidemenu-item sidemenu-item-submenu ${activeClassName}`}
      onClick={toggleCollapse}
    >
      <span className='sidemenu-item-anchor'>
        {children}

        <span className='sidemenu-item-title'>
          {title}
        </span>

        <ChevronDownIcon
          className='sidemenu-item-chevron'
        />
      </span>

      <Submenu
        parentId={id}
        menuItems={items}
        isCollapsed={isCollapsed}
      />
    </li>
  )
}

function SidemenuItemWithoutSubmenu({ children, title, activeClassName, handleIsActive }) {
  return (
    <li
      className={`sidemenu-item ${activeClassName}`}
      onClick={handleIsActive}
    >
      <a className='sidemenu-item-anchor' href={getLocalHref(title)}>
        {children}

        <span className='sidemenu-item-title'>
          {title}
        </span>
      </a>
    </li>
  )
}

function SidemenuItem({ children, id, title, hasMenu, activeClassName, handleIsActive, items }) {
  return hasMenu
    ? (
      <SidemenuItemWithSubmenu
        id={id}
        title={title}
        items={items}
        activeClassName={activeClassName}
        handleIsActive={handleIsActive}
      >
        {children}
      </SidemenuItemWithSubmenu>
    )
    : (
      <SidemenuItemWithoutSubmenu
        title={title}
        activeClassName={activeClassName}
        handleIsActive={handleIsActive}
      >
        {children}
      </SidemenuItemWithoutSubmenu>
    )
}

export default SidemenuItem
