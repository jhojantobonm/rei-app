import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

const years: number[] = []
for (let i = 1965; i <= 2022; i++) {
  years.push(i)
}



export const CalculatorComp = ()=>{


  const handleMousedown = (size: number)=>{
    
  }

  
  return(
    <div data-testid='calculator-component' className="flex flex-col gap-7 md:gap-20">
      <div>
        <Select>
          <SelectTrigger className="w-[180px] bg-white text-[1.4rem] p-8 rounded-2xl">
            <SelectValue placeholder="Select the year"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-[1.4rem]">Year</SelectLabel>
                {years.map((size) => (
                  <SelectItem key={size} value={size + ''} onMouseDown={()=>handleMousedown(size)} className="text-[1.4rem]">
                    {size}
                  </SelectItem>
                ))}
              </SelectGroup>
          </SelectContent>

        </Select>
      </div>
      <div>
        <Label htmlFor="consumption" className="text-[1.4rem] font-light">* Total electrical consumption (kWh):</Label>
        <Input type="number" id="consumption" placeholder="Example: 18" className="bg-white mt-2 p-7 text-[1.4rem] md:text-[1.4rem] placeholder:text-gray-300" />
      </div>
      <div>
        <Label htmlFor="capacity" className="text-[1.4rem] font-light">(optional) Total capacity (kWh):</Label>
        <Input type="number" id="capacity" placeholder="10000" className="bg-white mt-2 p-7 text-[1.4rem] md:text-[1.4rem] placeholder:text-gray-300"/>
      </div>
      <div className="flex justify-center">
        <Button className="cursor-pointer text-[1.4rem] h-[4rem] w-fit">Calculate</Button>
      </div>
      <p className="text-[1.6rem] font-bold text-center">Your consumption has 29% renewable energy</p>
    </div>
  )
}