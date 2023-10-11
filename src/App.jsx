import Sidebar from './components/Sidebar/Sidebar'
import MenuProvider from './context/MenuContext'
import './App.scss'

function App() {
  return (
    <MenuProvider>
      <Sidebar />
    </MenuProvider>
  )
}

export default App
