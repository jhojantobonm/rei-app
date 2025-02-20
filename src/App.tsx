import { createPortal } from "react-dom"
import { Menu } from "./components/Menu"
import { Home } from "./pages/Home"
import { useContextApp } from "./context/useContextApp"

function App() {
  const {isMenuOpen} = useContextApp();

  return (
    <>
      <Home/>
      {isMenuOpen && createPortal(<Menu/>,document.body)}

    </>
  )
}

export default App
