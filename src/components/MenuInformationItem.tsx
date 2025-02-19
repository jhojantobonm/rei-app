import { useContextApp } from '../context/useContextApp'
import './MenuInformationItem.css'

interface Props{
  id: number,
  src:string,
}

export const MenuInformationItem = ({ id, src }:Props) => {
  const {setContentId}= useContextApp();

  const handleClick = ()=>{
    setContentId(id);
  }

  return (
      <li data-testid='menu-info-item'>
        <button className='cursor-pointer w-[5rem]'
        onClick={handleClick}
        >
          <img id="menu-info-item-image" 
          src={src} alt={`Image of ${src}`}/>
        </button>
      </li>
  )
}