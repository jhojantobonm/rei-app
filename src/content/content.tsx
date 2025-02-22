import { BarsChart } from "@/components/BarsChart";
import { ContentInformationBioFuel } from "../components/ContentInformationBioFuel";
import { ContentInformationGeothermal } from "../components/ContentInformationGeothermal";
import { ContentInformationHydro } from "../components/ContentInformationHydro";
import { ContentInformationSolar } from "../components/ContentInformationSolar";
import { ContentInformationWind } from "../components/ContentInformationWind";
import { PieChartComp } from "@/components/PieChartComp";
import { LineChartComp } from "@/components/LineChartComp";

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
  },
  {
    title: 'Participation of Renewable Energies',
    description: 'Shows the percentage of each type of renewable energy in total electricity consumption.',
    chart: <PieChartComp/>
  },
  {
    title: 'Trend in installed capacity',
    description: 'It shows the evolution of the installed capacity of different renewable energy sources over time.',
    chart: <LineChartComp/>
  },
  {
    title: 'Comparison between Renewable and Conventional Energy Consumption',
    description: 'Compares renewable energy consumption with conventional energy consumption over time.',
    chart: <div>4</div>
  },
]