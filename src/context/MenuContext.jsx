import { createContext, useState } from "react";

export const MenuContext = createContext()

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenuItemId, setActiveMenuItemId] = useState()
  const [activeSubmenuItemId, setActiveSubmenuItemId] = useState()

  return (
    <MenuContext.Provider value={{
      isOpen, 
      setIsOpen,
      activeMenuItemId,
      setActiveMenuItemId,
      activeSubmenuItemId,
      setActiveSubmenuItemId
    }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider