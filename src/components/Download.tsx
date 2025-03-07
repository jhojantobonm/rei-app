import { useContextApp } from "@/context/useContextApp";
import { fetchDownloadFile } from "@/utils/dataFetch";
import { Button } from "./ui/button";


export const Download: React.FC = ()=>{
  const {selectedFile} = useContextApp();
  console.log(selectedFile);
  
  return(
    <div data-testid='download-component'>
      <Button onClick={()=>fetchDownloadFile(selectedFile)}>Download</Button>
    </div>
  )
}