import { MenuInformationItem } from "./MenuInformationItem"

import damIcon from '../assets/images/icons/dam.png'
import windIcon from '../assets/images/icons/wind-power.png'
import solarIcon from '../assets/images/icons/solar-energy.png'
import bioFuelIcon from '../assets/images/icons/biofuel.png'
import geoThermalIcon from '../assets/images/icons/geothermal-energy.png'

export const MenuInformation = () => {
  const renewableEnergiesIcons=[
    damIcon,
    windIcon,
    solarIcon,
    bioFuelIcon,
    geoThermalIcon
  ];
  return (
    <>
      <nav data-testid='menu-info'>
        <ul className="flex">
          {
            renewableEnergiesIcons.map(item=><MenuInformationItem src={item}/>)
          }
        </ul>
      </nav>
    
    </>
  )
}