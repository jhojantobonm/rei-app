import { IoClose } from "react-icons/io5";
import './Menu.css'
import { useContextApp } from "../context/useContextApp";

export const Menu = () => {
    const {setIsMenuOpen} = useContextApp();

    const handleClick = ()=>{
      setIsMenuOpen(false);
    }
    
    const handlePropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
      e.stopPropagation();
    }

    return (
      <>
      <div onClick={(e)=>{}}></div>
        <div data-testid='menu' 
          className="fixed top-0 left-0 right-0 bottom-0" id='menu' onClick={handleClick}>
            <div className='bg-white h-full w-[24rem] p-4' onClick={handlePropagation}>
              <div className="flex justify-end">
                <IoClose size={'2.4rem'} className="cursor-pointer" onClick={handleClick}/>
              </div>
              <nav>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>
              </nav>
            </div>


        </div>
      
      </>
  )
}