import './HeaderApp.css'

import { MenuButton } from "./MenuButton"

export const HeaderApp = ({title}:{title?:string})=>{
  return(
    <header data-testid='header'>
      <figure>
        <div id='mask-header' className='w-full h-[130px]'></div>
      </figure>
      <div className="relative">
        <h1 className="text-center text-3xl font-bold mt-5">{title}</h1> 
        <MenuButton className="absolute top-0 left-[2rem]"/>
      </div>
    </header>
  )
}