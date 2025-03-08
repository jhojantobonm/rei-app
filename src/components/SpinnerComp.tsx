import { useInsertionEffect } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"



interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export const SpinnerComp = ({...props}:Props)=>{
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes rotateSpinner{
        0%{
          transform: rotate(0deg);
        }

        100%{
          transform: rotate(360deg);
        }
      }

      .dynamic-class {
        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
      }
        
      .dynamic-class-spinner{
        width: 6rem; height: 6rem;
        animation: rotateSpinner 1s linear infinite;
      }
      
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div data-testid='spinner-component' {...props} className="dynamic-class">
      <AiOutlineLoading3Quarters color="var(app-background)" className="dynamic-class-spinner"/>
    </div>
  )
}