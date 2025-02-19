import { MenuInformationItem } from "./MenuInformationItem"

import damIcon from '../assets/images/icons/dam.png'
import windIcon from '../assets/images/icons/wind-power.png'
import solarIcon from '../assets/images/icons/solar-energy.png'
import bioFuelIcon from '../assets/images/icons/biofuel.png'
import geoThermalIcon from '../assets/images/icons/geothermal-energy.png'

interface MenuProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{}

export const MenuInformation = (props: MenuProps) => {
  const renewableEnergiesIcons=[
    {id:0,icon: damIcon},
    {id:1,icon: windIcon,},
    {id:2,icon: solarIcon,},
    {id:3,icon: bioFuelIcon,},
    {id:4,icon: geoThermalIcon,}
  ];
  return (
    <>
      <nav data-testid='menu-info' {...props}>
        <ul className="flex flex-wrap justify-around gap-2.5 md:gap-8 md:justify-end">
          {
            renewableEnergiesIcons.map(item=><MenuInformationItem key={item.id} id={item.id} src={item.icon} />)
          }
        </ul>
      </nav>
    
    </>
  )
}