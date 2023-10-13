import { useContext } from "react"
import { MenuContext } from "../../context/MenuContext"
import Header from "../../components/Header/Header"
import './Content.scss'
import Footer from "../../components/Footer/Footer"

function Content () {
  const menuContext = useContext(MenuContext) 

  return (
    <div className={`content ${menuContext.isOpen ? 'sidebar--open' : ''}`}>
      <Header id='home'/>

      <main>

      </main>

      <Footer />
    </div>
  )
}

export default Content
