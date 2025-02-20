import { IoMenu } from "react-icons/io5";
import { useContextApp } from "../context/useContextApp";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export const MenuButton = (props: Props)=>{
  const {setIsMenuOpen} = useContextApp();

  const handleClick = ()=>{
    setIsMenuOpen(prev=>!prev);
  }

  return(
    <div data-testid='menu-button' {...props} onClick={handleClick}>
      <IoMenu className="cursor-pointer" size={'2.4rem'}></IoMenu>

    </div>
  )
}