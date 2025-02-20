import { createPortal } from "react-dom"
import { Menu } from "./components/Menu"
import { Home } from "./pages/Home"
import { useContextApp } from "./context/useContextApp"
import { Route, Routes } from "react-router-dom";
import { HeaderApp } from "./components/HeaderApp";
import { FooterApp } from "./components/FooterApp";

function App() {
  const {isMenuOpen} = useContextApp();

  return (
    <>
      <HeaderApp/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/data" element={<div>Data</div>}/>
        <Route path="/calculator" element={<div>Calculator</div>}/>
        <Route path="/dashboard" element={<div>Dashboard</div>}/>
        <Route path="*" element={<div>Not found</div>}/>

      </Routes>
      <FooterApp/>
      {isMenuOpen && createPortal(<Menu/>,document.body)}
    </>
  )
}

export default App
