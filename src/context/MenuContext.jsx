import { createContext, useState } from "react";

export const MenuContext = createContext()

export function MenuProvider({ children }) {
  const [activeMenuItemId, setActiveMenuItemId] = useState()
  const [activeSubmenuItemId, setActiveSubmenuItemId] = useState()

  return (
    <MenuContext.Provider value={{
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