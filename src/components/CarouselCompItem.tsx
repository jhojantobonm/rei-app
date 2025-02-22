import { useContextApp } from "@/context/useContextApp";


export const CarouselCompItem = ({i}:{i?:number})=>{
 const {carouselCount, setCarouselCount} = useContextApp();

 const handleClick = ()=>{
  if(!i) i=0;
  setCarouselCount(i)
  
 }

  return(
    <li data-testid='carousel-item-component' 
    className={`rounded-full cursor-pointer ${carouselCount === i ? 'bg-amber-400 w-[1.5rem] h-[1.5rem]':'bg-amber-700 w-[1rem] h-[1rem]'}`}
    onClick={handleClick}
    
    ></li>
    
  )
}