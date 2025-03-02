import { AiOutlineLoading3Quarters } from "react-icons/ai"


export const SpinnerComp = ()=>{
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
      <AiOutlineLoading3Quarters size={'6rem'} color="green" className="animate-spin"/>
    </div>
  )
}