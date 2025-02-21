import { createPortal } from "react-dom"
import { Menu } from "./components/Menu"
import { Home } from "./pages/Home"
import { useContextApp } from "./context/useContextApp"
import { Route, Routes } from "react-router-dom";
import { FooterApp } from "./components/FooterApp";
import { Data } from "./pages/Data";
import { Calculator } from "./pages/Calculator";
import { Dashboard } from "./pages/Dashboard";


function App() {
  const {isMenuOpen} = useContextApp();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/data" element={<Data/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
      <FooterApp/>
      {isMenuOpen && createPortal(<Menu/>,document.body)}
    </>
  )
}

export default App
