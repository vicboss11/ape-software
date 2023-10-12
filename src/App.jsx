import Sidebar from './components/Sidebar/Sidebar'
import MenuProvider from './context/MenuContext'
import './App.scss'
import Content from './pages/Content/Content'

function App() {
  return (
    <MenuProvider>
      <Sidebar />

      <Content />
    </MenuProvider>
  )
}

export default App
