import { MenuInformationItem } from "./MenuInformationItem"

import damIcon from '../assets/images/icons/dam.png'
import windIcon from '../assets/images/icons/wind-power.png'
import solarIcon from '../assets/images/icons/solar-energy.png'
import bioFuelIcon from '../assets/images/icons/biofuel.png'
import geoThermalIcon from '../assets/images/icons/geothermal-energy.png'

interface MenuProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>{}

export const MenuInformation = (props: MenuProps) => {
  const renewableEnergiesIcons=[
    damIcon,
    windIcon,
    solarIcon,
    bioFuelIcon,
    geoThermalIcon
  ];
  return (
    <>
      <nav data-testid='menu-info' {...props}>
        <ul className="flex flex-wrap justify-center gap-2.5">
          {
            renewableEnergiesIcons.map(item=><MenuInformationItem src={item}/>)
          }
        </ul>
      </nav>
    
    </>
  )
}