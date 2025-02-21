import { BarsChart } from "@/components/BarsChart";
import { ContentInformationBioFuel } from "../components/ContentInformationBioFuel";
import { ContentInformationGeothermal } from "../components/ContentInformationGeothermal";
import { ContentInformationHydro } from "../components/ContentInformationHydro";
import { ContentInformationSolar } from "../components/ContentInformationSolar";
import { ContentInformationWind } from "../components/ContentInformationWind";

export const content = [
  {
    title:'Hydro Energy',
    image:'https://images.pexels.com/photos/1633943/pexels-photo-1633943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: <ContentInformationHydro/> 
  },
  {
    title:'Wind Energy',
    image:'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: <ContentInformationWind/> 
  },
  {
    title:'Solar Energy',
    image:'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: <ContentInformationSolar/> 
  },
  {
    title:'Bio Fuel Energy',
    image:'https://images.pexels.com/photos/3129643/pexels-photo-3129643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: <ContentInformationBioFuel/> 
  },
  {
    title:'Geothermal Energy',
    image:'https://images.pexels.com/photos/7403905/pexels-photo-7403905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: <ContentInformationGeothermal/> 
  },
];

export const chartContents = [
  {
    title: 'Renewable Energy Production by Source',
    description: 'Shows the amount of energy produced by each renewable source.',
    chart: <BarsChart/>
  }
]