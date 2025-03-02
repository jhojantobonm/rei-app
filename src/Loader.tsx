import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import App from "./App";
import { SpinnerComp } from "./components/SpinnerComp";

export function Loader(){
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500); // Simulate loading
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);
  return<>
  {isLoading ? <div className="w-[100vw] h-[100vh] flex justify-center items-center"><SpinnerComp/></div> : <App /> }
  </> 
}






