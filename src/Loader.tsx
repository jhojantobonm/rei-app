import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import App from "./App";

export function Loader(){
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);
  return<>
  {isLoading ? (<div className="w-screen h-screen flex justify-center items-center animate-spin">
    <AiOutlineLoading3Quarters size={'6rem'} color="green"/>

  </div>) : <App /> }
  </> 
}






