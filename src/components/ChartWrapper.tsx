import { ReactNode } from "react"

interface Props {
  title?: string,
  desc?: string,
  children?: ReactNode
}

export const ChartWrapper = ({title, desc, children}: Props)=>{

  return(
    <div data-testid='chart-wrapper-component'>
      <h2 className="text-[1.5rem] text-center font-semibold">{title}</h2>
      <p className="text-[1.4rem] mt-3.5">{desc}</p>
      <div className="mt-7 shadow-2xl">
        {children}
      </div>
    </div>
  )
}