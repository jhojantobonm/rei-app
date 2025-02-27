import { ReactNode, useEffect, useState } from "react"
import { motion } from "framer-motion";
import { useContextApp } from "@/context/useContextApp";


interface Props {
  title?: string,
  desc?: string,
  children?: ReactNode
}

export const ChartWrapper = ({title, desc, children}: Props)=>{
    const {carouselCount} = useContextApp();    
      const [isScaled, setIsScaled] = useState(false);
      
    useEffect(()=>{
      setIsScaled(true);
      const timeId =  setTimeout(() => {
        setIsScaled(false);
      }, 100);
      return ()=>{
        clearTimeout(timeId);
      }
    },[carouselCount])

  return(
    <motion.div data-testid='chart-wrapper-component'
      animate={{ scale: isScaled ? 0 : 1 }}
      transition={{type: 'spring', duration: 0.5,bounce:0.5 }}
    >
      <h2 className="text-[1.5rem] text-center font-semibold">{title}</h2>
      <p className="text-[1.4rem] mt-3.5">{desc}</p>
      <div className="mt-7 shadow-2xl">
        {children}
      </div>
    </motion.div>
  )
}