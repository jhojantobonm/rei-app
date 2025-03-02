import { AiOutlineLoading3Quarters } from "react-icons/ai"


interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export const SpinnerComp = ({...props}:Props)=>{
  return (
    <div {...props}>
      <AiOutlineLoading3Quarters size={'6rem'} color="green" className="animate-spin"/>
    </div>
  )
}