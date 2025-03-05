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

export const getChartContents = (t:TFunction<"translation", undefined>)=>[
  {
    title: t('dashboard.bars_chart.description'),
    description: t('dashboard.bars_chart.details'),
    chart: <BarsChart/>
  },
  {
    title: t('dashboard.pie_chart.description'),
    description: t('dashboard.pie_chart.details'),
    chart: <PieChartComp/>
  },
  {
    title: t('dashboard.line_chart.description'),
    description: t('dashboard.line_chart.details'),
    chart: <LineChartComp/>
  },
  {
    title: t('dashboard.area_chart.description'),
    description: t('dashboard.area_chart.details'),
    chart: <AreaChartComp/>
  },
]