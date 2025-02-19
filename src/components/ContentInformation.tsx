import { ReactNode, useEffect, useState } from "react"
import { motion } from "framer-motion";
import './ContentInformationSolar.css'
import { useContextApp } from "../context/useContextApp";

interface ContentInfoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string,
  image?: string,
  children?: ReactNode,
}

export const ContentInformation = ({title,image,children,...props}: ContentInfoProps) => {
  const {contentId} = useContextApp();
  const [isScaled, setIsScaled] = useState(false);
  const [isBounce,setIsBounce] = useState<boolean>(false);


  const handleMouseEnter = ()=>{
    setIsBounce(true);
  }
  const handleMouseLeave = ()=>{
    setIsBounce(false);
  }

  useEffect(()=>{
    setIsScaled(true);
    const timeId =  setTimeout(() => {
      setIsScaled(false);
    }, 500);
    return ()=>{
      clearTimeout(timeId);
    }
  },[contentId])


  return (
      <div data-testid='content-info' {...props} className=' mt-7 text-[1.4rem]'>
        <motion.div
            animate={{ scale: isScaled ? 0 : 1 }}
            transition={{type: 'spring', duration: 0.5,bounce:0.5 }}
        >

          <h2 className="text-3xl font-semibold">{title}</h2>
          <div className="md:flex md:flex-row-reverse">
            <motion.div className="md:w-[50%] md:h-[25rem] mt-3.5 rounded-2xl overflow-hidden shadow-2xl"
              animate={{ scale: isBounce ? 1.05 : 1 }}
              transition={{type: 'spring', bounce:0.7}}
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              <figure className="w-full h-full">
                <img src={image} alt={`This is an image about ${title}`}
                className="w-full h-full object-fill" />
              </figure>
            </motion.div>
            <div className="md:w-[50%] mr-6">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
  )
}