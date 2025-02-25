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