import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  // SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useContextApp } from "@/context/useContextApp"
import { useTranslation } from "react-i18next";

export const DataSelector = () => {
  const {fileList,selectedFile,setSelectedFile} = useContextApp();
 
  const handleSelect = (value: string)=>{
    setSelectedFile(value);
    
  }

  const {t} = useTranslation();

  return (
      <div data-testid='data-selector'
      className="flex justify-center">
        <Select value={selectedFile} onValueChange={handleSelect}>
            <SelectTrigger className="w-full bg-app-secondary-background text-[1.2rem] py-6">
              <SelectValue placeholder={t('data.selector.placeholder')} />
            </SelectTrigger>
            <SelectContent className="p-4">
              <SelectGroup>
                {fileList.map(f=><SelectItem key={f} value={f} 
                className="text-[1rem]" 
                >{f}</SelectItem>)}
              </SelectGroup>
            </SelectContent>
          </Select>
      </div>
  )
}