import { AiOutlineLoading3Quarters } from "react-icons/ai"


export const SpinnerComp = ()=>{
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center animate-spin">
      <AiOutlineLoading3Quarters size={'6rem'} color="green"/>
    </div>
  )
}