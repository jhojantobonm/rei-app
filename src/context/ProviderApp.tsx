import { createContext, ReactNode, useEffect, useState} from "react";
import { fetchList } from "@/utils/dataFetch";
import { useTranslation } from "react-i18next";


type Props = {
  contentId: number,
  isMenuOpen: boolean,
  carouselCount: number,
  fileList:string[],
  selectedFile: string,
  year: string,
  isDark: boolean | undefined,
  setContentId:React.Dispatch<React.SetStateAction<number>>,
  setIsMenuOpen:React.Dispatch<React.SetStateAction<boolean>>,
  setCarouselCount:React.Dispatch<React.SetStateAction<number>>,
  setFileList:React.Dispatch<React.SetStateAction<string[]>>,
  setSelectedFile:React.Dispatch<React.SetStateAction<string>>,
  setYear:React.Dispatch<React.SetStateAction<string>>,
  setIsDark:React.Dispatch<React.SetStateAction<boolean | undefined>>,

}


export const AppContext = createContext<Props>({
  contentId: 0,
  isMenuOpen: false,
  carouselCount: 0,
  fileList: [],
  selectedFile:'',
  year: '',
  isDark: false,
  setContentId: ()=>{},
  setIsMenuOpen: ()=>{},
  setCarouselCount: ()=>{},
  setFileList: ()=>{},
  setSelectedFile: ()=>{},
  setYear: ()=>{},
  setIsDark: ()=>{},

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
  const [year, setYear] = useState<string>('2022');

  const [isDark, setIsDark] = useState<boolean | undefined>(()=>{
    return localStorage.getItem('theme') === 'dark';
  });
  
  const {i18n: {language}} = useTranslation();
  
  useEffect(()=>{
    document.documentElement.setAttribute('lang',language);
    fetchList()
      .then(data=>setFileList(data));
    
  
},[])

  useEffect(() => {
    if(isDark){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); 
    }
    else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); 
    }


  }, [isDark]);
  
  return (
    <AppContext.Provider value={{
      contentId,
      isMenuOpen,
      carouselCount,
      fileList,
      selectedFile,
      year,
      isDark,
      setContentId,
      setIsMenuOpen,
      setCarouselCount,
      setFileList,
      setSelectedFile,
      setYear,
      setIsDark
    }}>
      {children}
    </AppContext.Provider>
  )
}