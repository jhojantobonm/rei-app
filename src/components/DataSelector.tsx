import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useContextApp } from "@/context/useContextApp"


// const files = [
//   "01-renewable-share-energy.csv",
//   "02-modern-renewable-energy-consumption.csv",
//   "03-modern-renewable-prod.csv",
//   "04-share-electricity-renewables.csv",
//   "05-hydropower-consumption.csv",
//   "06-hydro-share-energy.csv",
//   "07-share-electricity-hydro.csv",
//   "08-wind-generation.csv",
//   "09-cumulative-installed-wind-energy-capacity-gigawatts.csv",
//   "10-wind-share-energy.csv",
//   "11-share-electricity-wind.csv",
//   "12-solar-energy-consumption.csv",
//   "13-installed-solar-PV-capacity.csv",
//   "14-solar-share-energy.csv",
//   "15-share-electricity-solar.csv",
//   "16-biofuel-production.csv",
//   "17-installed-geothermal-capacity.csv",
//   "18-conventional-energy-consumption.csv",
// ]


export const DataSelector = () => {
  const {fileList,setSelectedFile} = useContextApp();
 
  const handleMouseDown = (text: string)=>{
    setSelectedFile(text);
    
  }

  return (
      <div data-testid='data-selector'
      className="flex justify-center">
        <Select>
            <SelectTrigger className="w-full bg-white text-[1.2rem] py-6">
              <SelectValue placeholder="Select a file" />
            </SelectTrigger>
            <SelectContent className="p-4">
              <SelectGroup>
                <SelectLabel className="text-[1.4rem]">Data Files</SelectLabel>
                {fileList.map(f=><SelectItem key={f} value={f} 
                className="text-[1rem]" 
                onMouseDown={()=>handleMouseDown(f)}
                >{f}</SelectItem>)}
              </SelectGroup>
            </SelectContent>
          </Select>
      </div>
  )
}