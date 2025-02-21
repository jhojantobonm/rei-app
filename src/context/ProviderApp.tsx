import { createContext, ReactNode, useState} from "react";


type Props = {
  contentId: number,
  isMenuOpen: boolean,
  carouselCount: number,
  setContentId:React.Dispatch<React.SetStateAction<number>>,
  setIsMenuOpen:React.Dispatch<React.SetStateAction<boolean>>,
  setCarouselCount:React.Dispatch<React.SetStateAction<number>>,
}


export const AppContext = createContext<Props>({
  contentId: 0,
  isMenuOpen: false,
  carouselCount: 0,
  setContentId: ()=>{},
  setIsMenuOpen: ()=>{},
  setCarouselCount: ()=>{},

});

type ProviderProps = {
  children: ReactNode;
}

export function AppProvider({children}:ProviderProps){
  const [contentId, setContentId] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [carouselCount, setCarouselCount] = useState<number>(0);

  
  return (
    <AppContext.Provider value={{
      contentId,
      isMenuOpen,
      carouselCount,

      setContentId,
      setIsMenuOpen,
      setCarouselCount,
    }}>
      {children}
    </AppContext.Provider>
  )
}