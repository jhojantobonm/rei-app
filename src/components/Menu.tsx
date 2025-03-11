import { IoClose } from "react-icons/io5";
import './Menu.css'
import { useContextApp } from "../context/useContextApp";
import { NavLink } from "react-router-dom";
import { DarkMode } from "./DarkMode";
import { LangSelector } from "./LangSelector";
import { useTranslation } from "react-i18next";

export const Menu = () => {
    const {setIsMenuOpen} = useContextApp();
    const {t} = useTranslation();

    const handleClose = ()=>{
      setIsMenuOpen(false);
    }
    
    const handlePropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
      e.stopPropagation();
    }

    return (
      <>
        <div data-testid='menu' 
          className="fixed top-0 left-0 right-0 bottom-0" id='menu-modal' onClick={handleClose}>
          <div className='bg-app-secondary-background h-full w-[24rem] p-4' onClick={handlePropagation}
            id='menu'
          > 
            
              <div className="flex justify-end">
                <IoClose size={'2.4rem'} className="cursor-pointer" onClick={handleClose}/>
              </div>
              <nav>
                <ul className="flex flex-col items-center gap-6 text-2xl">
                  <DarkMode/>
                  <NavLink to='/' onClick={handleClose}>{t('menu.home')}</NavLink>
                  <NavLink to='/data' onClick={handleClose}>{t('menu.data')}</NavLink>
                  <NavLink to='/calculator' onClick={handleClose}>{t('menu.calculator')}</NavLink>
                  <NavLink to='/dashboard' onClick={handleClose}>{t('menu.dashboard')}</NavLink>
                  <LangSelector/>
                </ul>
              </nav>
            
          </div>

        </div>
      
      </>
  )
}