import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useContextApp } from "@/context/useContextApp";


export const DarkMode = ()=>{
  const {isDark, setIsDark} = useContextApp();

  return (
    <div data-testid='dark-mode' className="flex items-center space-x-2 cursor-pointer" onClick={()=>setIsDark(prev=>!prev)}>
      {isDark ? <MdOutlineLightMode size={30}/> : <MdOutlineDarkMode size={30}/> }
    </div>
  )
}