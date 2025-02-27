import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { fetchRenewableData } from "@/utils/dataFetch"
import { useEffect, useState } from "react"
import { CheckedState } from "@radix-ui/react-checkbox"

const years: number[] = []
for (let i = 1965; i <= 2022; i++) {
  years.push(i)
}



export const CalculatorComp = ()=>{
  const [data, setData] = useState([
    { source: "renewable", "capacity (TWh)": 323, year: "2022" },
    { source: "non-renewable", "capacity (TWh)": 18120, year: "2022" },
  ])
  const [year, setYear] = useState('2022');
  const [calculate, setCalculate] = useState<boolean>(false);
  const [totalCapacity, setTotalCapacity] = useState<string>('0');
  const [consumption, setConsumption] = useState<string>('0');
  const [totalPercentage, setTotalPercentage] = useState<number>(0);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleMousedown = (y: string)=>{
    setCalculate(false);
    setYear(y);
    fetchRenewableData(y)
    .then((data)=>{
      setTotalCapacity(data[0]['capacity (TWh)'] + data[1]['capacity (TWh)'])
      setData(data);
    });
  }
  
  const handleCalculate = ()=>{
    if(Number(consumption) === 0) return;
    const multiplier = 1000000000;
    const renewableCapacityInKWh = data[0]['capacity (TWh)'] * multiplier;
    const totalCapacityInKWh = Number(totalCapacity) * multiplier;
    
    const renewablePercentage = Number(((renewableCapacityInKWh / totalCapacityInKWh) * 100).toFixed(2));
    
    const userRenewableEnergy = Number(((renewablePercentage / 100) * Number(consumption)).toFixed(2));
    
    const renewableConsumptionPercentage = Number(((userRenewableEnergy / Number(consumption)) * 100).toFixed(2)); 
    
    setTotalPercentage(renewableConsumptionPercentage);

    setCalculate(true);
    // setConsumption('')
  
  }

  const handleReset = ()=>{
    setCalculate(false);
    setConsumption('');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    let inputValue = e.target.value;
    
    const isMatchRegex = inputValue.search(/[0-9]+/)

    if(inputValue === '')
      setConsumption('0');
    
    if(isMatchRegex < 0) {
      inputValue = String(Number(inputValue));
      return;
    };

    inputValue = String(Number(inputValue));

    setConsumption(inputValue);
  }

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>)=>{
    let inputValue = e.target.value;
    
    const isMatchRegex = inputValue.search(/[0-9]+/)

    if(inputValue === '')
      setTotalCapacity('0');
    
    if(isMatchRegex < 0) {
      inputValue = String(Number(inputValue));
      return;
    };

    inputValue = String(Number(inputValue));

    setTotalCapacity(inputValue);
  }

  const handleChecked = (e: boolean)=>{
    
    setIsChecked(e);
    if (!e) {
      setTotalCapacity(String(data[0]['capacity (TWh)'] + data[1]['capacity (TWh)']));
    }
  }
    
  
  useEffect(()=>{
    setTotalCapacity(String(data[0]['capacity (TWh)'] + data[1]['capacity (TWh)']));
  },[]);

  return(
    <div data-testid='calculator-component' className="flex flex-col flex-wrap gap-7 md:gap-20">
      
      <div>
        <p className="text-[1.4rem] pb-2">Data from 03-modern-renewable-prod.csv file</p>
        <Select>
          <SelectTrigger className="w-[180px] bg-white text-[1.4rem] p-8 rounded-2xl">
            <SelectValue placeholder="Select the year"/>
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
      <div>
        <Label htmlFor="consumption" className="text-[1.4rem] font-light">* Total electrical consumption (kWh):</Label>
        <Input type="number" id="consumption" placeholder="Example: 18" className="bg-white mt-2 p-7 text-[1.4rem] md:text-[1.4rem] placeholder:text-gray-300"
        min={0}
        value={consumption}
        onChange={handleChange}
        
        />
      </div>
      <div>
        <Label htmlFor="capacity" className="text-[1.4rem] font-light">(optional) Total capacity (TWh):</Label>
        <Input type="number" id="capacity" disabled={!  isChecked} placeholder={totalCapacity + ''}
          className="bg-white mt-2 p-7 text-[1.4rem] md:text-[1.4rem] placeholder:text-gray-300"
          min={1}
          value={totalCapacity}
          onChange={handleChange2}
          />
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" onCheckedChange={handleChecked} className="w-[2rem] h-[2rem] rounded-full" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[1.4rem]"
        >
          Enter the Total Capacity Manually
        </label>
      </div>
      {calculate && <p className="text-[1.6rem] font-bold text-center">Your consumption of "{consumption} KWh" in {year} would have {totalPercentage}% or {Number((Number(consumption) * Number(((totalPercentage * 100 / 100)).toFixed(2))/100).toFixed(2))} KWh of renewable energy</p>}
      <div className="flex justify-around">
        <Button className="cursor-pointer text-[1.4rem] h-[4rem] w-fit" onClick={handleCalculate}>Calculate</Button>
        <Button className="cursor-pointer text-[1.4rem] h-[4rem] w-fit" onClick={handleReset}>Reset</Button>
      </div>
    </div>
  )
}