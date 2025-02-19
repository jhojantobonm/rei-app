import { useContext } from "react"
import { AppContext } from "./ProviderApp"

export function useContextApp (){
  return useContext(AppContext);
}