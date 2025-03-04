import { BarsChart } from "@/components/BarsChart";
import { ContentInformationBioFuel } from "../components/ContentInformationBioFuel";
import { ContentInformationGeothermal } from "../components/ContentInformationGeothermal";
import { ContentInformationHydro } from "../components/ContentInformationHydro";
import { ContentInformationSolar } from "../components/ContentInformationSolar";
import { ContentInformationWind } from "../components/ContentInformationWind";
import { PieChartComp } from "@/components/PieChartComp";
import { LineChartComp } from "@/components/LineChartComp";
import { AreaChartComp } from "@/components/AreaChartComp";
import windImage from '@/assets/images/wind.jpeg'
import hydroImage from '@/assets/images/hydro.jpeg'
import solarImage from '@/assets/images/solar.jpeg'
import biofuelImage from '@/assets/images/biofuel.jpeg'
import geoImage from '@/assets/images/geothermal.jpeg'
import { TFunction } from "i18next";



export const getContent = (t:TFunction<"translation", undefined>)=> [
  {
    title: t('information.hydro_energy.title'),
    image: hydroImage,
    description: <ContentInformationHydro/> 
  },
  {
    title: t('information.wind_energy.title'),
    image: windImage,
    description: <ContentInformationWind/> 
  },
  {
    title:t('information.solar_energy.title'),
    image: solarImage,
    description: <ContentInformationSolar/> 
  },
  {
    title:t('information.biofuel_energy.title'),
    image: biofuelImage,
    description: <ContentInformationBioFuel/> 
  },
  {
    title:t('information.geothermal_energy.title'),
    image: geoImage,
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
    chart: <AreaChartComp/>
  },
]