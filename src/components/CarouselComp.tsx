import { chartContents } from "@/content/content";
import { useContextApp } from "@/context/useContextApp";
import { useEffect} from "react"


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

  useEffect(()=>{
    console.log(carouselCount);

  },[carouselCount])
  
  return(
    <div data-testid='carousel-component' className="flex justify-center gap-7">
      <button type="button" onClick={handleClickDecrease}>Prev</button>
        <ul className="flex justify-center gap-8">
          {
            chartContents.map(c=>{
              return <li key={c.title} className="w-[1rem] h-[1rem] bg-amber-700 rounded-full"></li>
            })
            
          }
        </ul>
      <button type="button" onClick={handleClickIncrease}>Next</button>
    </div>
  )
}