import { IoMenu } from "react-icons/io5";

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export const MenuButton = (props: Props)=>{
  return(
    <div data-testid='menu-button' {...props}>
      <IoMenu className="cursor-pointer" size={'2.4rem'}></IoMenu>

    </div>
  )
}