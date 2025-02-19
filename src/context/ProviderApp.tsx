import { createContext, ReactNode, useState} from "react";


type Props = {
  contentId: number,
  setContentId:React.Dispatch<React.SetStateAction<number>>,
}


export const AppContext = createContext<Props>({
  contentId: 0,
  setContentId: ()=>{},

});

type ProviderProps = {
  children: ReactNode;
}

export function AppProvider({children}:ProviderProps){
  const [contentId, setContentId] = useState<number>(0);

  return (
    <AppContext.Provider value={{
      contentId,
      setContentId
    }}>
      {children}
    </AppContext.Provider>
  )
}