import { createContext, ReactNode, useEffect, useState} from "react";
import { fetchList } from "@/utils/dataFetch";


type Props = {
  contentId: number,
  isMenuOpen: boolean,
  carouselCount: number,
  fileList:string[],
  selectedFile: string,
  setContentId:React.Dispatch<React.SetStateAction<number>>,
  setIsMenuOpen:React.Dispatch<React.SetStateAction<boolean>>,
  setCarouselCount:React.Dispatch<React.SetStateAction<number>>,
  setFileList:React.Dispatch<React.SetStateAction<string[]>>,
  setSelectedFile:React.Dispatch<React.SetStateAction<string>>,
}


export const AppContext = createContext<Props>({
  contentId: 0,
  isMenuOpen: false,
  carouselCount: 0,
  fileList: [],
  selectedFile:'',
  setContentId: ()=>{},
  setIsMenuOpen: ()=>{},
  setCarouselCount: ()=>{},
  setFileList: ()=>{},
  setSelectedFile: ()=>{},

});

type ProviderProps = {
  children: ReactNode;
}

export function AppProvider({children}:ProviderProps){
  const [contentId, setContentId] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [carouselCount, setCarouselCount] = useState<number>(0);
  const [fileList, setFileList] = useState<string[]>([]) 
  const [selectedFile, setSelectedFile] = useState<string>('01-renewable-share-energy.csv'); 
  
  useEffect(()=>{
    fetchList().then(data=>setFileList(data));
  },[])
  
  return (
    <AppContext.Provider value={{
      contentId,
      isMenuOpen,
      carouselCount,
      fileList,
      selectedFile,
      setContentId,
      setIsMenuOpen,
      setCarouselCount,
      setFileList,
      setSelectedFile,
    }}>
      {children}
    </AppContext.Provider>
  )
}