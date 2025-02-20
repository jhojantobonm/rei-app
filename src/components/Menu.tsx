import { IoClose } from "react-icons/io5";
import './Menu.css'
import { useContextApp } from "../context/useContextApp";
import { NavLink } from "react-router-dom";

export const Menu = () => {
    const {setIsMenuOpen} = useContextApp();

    const handleClose = ()=>{
      setIsMenuOpen(false);
    }
    
    const handlePropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
      e.stopPropagation();
    }

    return (
      <>
        <div data-testid='menu' 
          className="fixed top-0 left-0 right-0 bottom-0" id='menu' onClick={handleClose}>
            <div className='bg-white h-full w-[24rem] p-4' onClick={handlePropagation}>
              <div className="flex justify-end">
                <IoClose size={'2.4rem'} className="cursor-pointer" onClick={handleClose}/>
              </div>
              <nav>
                <ul>
                  <NavLink to='/home'>Home</NavLink>
                  <NavLink to='/data'>Data</NavLink>
                  <NavLink to='/calculator'>Calculator</NavLink>
                  <NavLink to='/dashboard'>Dashboard</NavLink>
                </ul>
              </nav>
            </div>


        </div>
      
      </>
  )
}