
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { useContextApp } from "@/context/useContextApp";

const years: number[] = []
for (let i = 1965; i <= 2022; i++) {
  years.push(i)
}

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export const YearSelector = ({...props}: Props)=>{
  const {year, setYear} = useContextApp();
  
  const handleMousedown = (y: string)=>{
    setYear(y);
  }

  return(
    <div data-testid='year-selector-component' {...props}>
      <Select>
        <SelectTrigger className="w-[180px] bg-app-secondary-background text-[1.4rem] p-8 rounded-2xl text-foreground">
          <SelectValue placeholder={year}/>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="text-[1.4rem]">Year</SelectLabel>
              {years.map((y) => (
                <SelectItem key={y} value={y + ''} onMouseDown={()=>handleMousedown(y+'')} className="text-[1.4rem]">
                  {y}
                </SelectItem>
              ))}
            </SelectGroup>
        </SelectContent>

      </Select>
    </div>
     
  )
}