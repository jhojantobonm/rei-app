import { useState } from 'react';
import { useContextApp } from '../context/useContextApp'
import './MenuInformationItem.css'
import { motion } from "framer-motion";



interface Props {
  id?: number,
  src?: string,
}

export const MenuInformationItem = ({ id, src }:Props) => {
  const {setContentId}= useContextApp();
  const [isBounce,setIsBounce] = useState<boolean>(false);
  if(!id) id=0;
  const handleClick = ()=>{
    setContentId(id);
  }

  const handleMouseEnter = ()=>{
    setIsBounce(true);
  }
  const handleMouseLeave = ()=>{
    setIsBounce(false);
  }

  return (
      <li data-testid='menu-info-item'>
        <motion.div
            animate={{ scale: isBounce ? 1.4 : 1 }}
            transition={{type: 'spring', bounce:0.7}}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
          <button className='cursor-pointer w-[5rem]'
          onClick={handleClick}
          >
            <img id="menu-info-item-image" 
            src={src} alt={`Image of ${src}`}/>
          </button>
        </motion.div>
      </li>
  )
}