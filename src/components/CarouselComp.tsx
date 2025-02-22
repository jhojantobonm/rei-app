import { chartContents } from "@/content/content";
import { useContextApp } from "@/context/useContextApp";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { CarouselCompItem } from "./CarouselCompItem";

export const CarouselComp: React.FC = ()=>{
  const {carouselCount,setCarouselCount} = useContextApp();
  const length = chartContents.length;

  const handleClickIncrease = ()=>{
    setCarouselCount(prev=>prev + 1);
    if(carouselCount >= length-1)
      setCarouselCount(0);
  }
  
  const handleClickDecrease = ()=>{
    setCarouselCount(prev=>prev - 1);
    if(carouselCount <= 0)
      setCarouselCount(length-1);
  }
  
  return(
    <div data-testid='carousel-component' className="flex flex-wrap justify-center gap-7 items-center my-10">
      <button type="button" onClick={handleClickDecrease} className="cursor-pointer"><IoIosArrowBack size='3rem'/></button>
        <ul className="flex flex-wrap justify-center items-center gap-8">
          {
            chartContents.map((c,i)=>{
              return <CarouselCompItem key={c.title} i={i} />
            })
            
          }
        </ul>
      <button type="button" onClick={handleClickIncrease} className="cursor-pointer"><IoIosArrowForward size='3rem'/></button>
    </div>
  )
}