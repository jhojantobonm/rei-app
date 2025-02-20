import { createContext, ReactNode, useState} from "react";


type Props = {
  contentId: number,
  isMenuOpen: boolean,
  setContentId:React.Dispatch<React.SetStateAction<number>>,
  setIsMenuOpen:React.Dispatch<React.SetStateAction<boolean>>,
}


export const AppContext = createContext<Props>({
  contentId: 0,
  isMenuOpen: false,
  setContentId: ()=>{},
  setIsMenuOpen: ()=>{},

});

type ProviderProps = {
  children: ReactNode;
}

export function AppProvider({children}:ProviderProps){
  const [contentId, setContentId] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  
  return (
    <AppContext.Provider value={{
      contentId,
      isMenuOpen,

      setContentId,
      setIsMenuOpen,
    }}>
      {children}
    </AppContext.Provider>
  )
}