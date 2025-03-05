import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { fetchBarsChartData } from "@/utils/dataFetch"
import { YearSelector } from "./YearSelector"
import { useContextApp } from "@/context/useContextApp"
import { SpinnerComp } from "./SpinnerComp"
import { useTranslation } from "react-i18next"

// const chartDataDummy = [
//   { source: "hydro", capacity: 500, fill: "var(--color-hydro)" },
//   { source: "wind", capacity: 200, fill: "var(--color-wind)" },
//   { source: "solar", capacity: 187, fill: "var(--color-solar)" },
//   { source: "biofuel", capacity: 173, fill: "var(--color-biofuel)" },
//   { source: "geothermal", capacity: 90, fill: "var(--color-geothermal)" },
// ]




interface BarProps {
  source: string,
  capacity: number,
  fill: string
}

export const BarsChart = ()=>{
  const {t} = useTranslation();

  const chartConfig = {
    hydro: {
      label: t('dashboard.bars_chart.sources.hydro'),
      color: "rgb(0, 149, 255)",
    },
    wind: {
      label: t('dashboard.bars_chart.sources.wind'),
      color: "rgb(98, 190, 255)",
    },
    solar: {
      label: t('dashboard.bars_chart.sources.solar'),
      color: "hsl(43 74% 66%)",
    },
    biofuel: {
      label: t('dashboard.bars_chart.sources.biofuel'),
      color: "rgb(6, 153, 50)",
    },
    geothermal: {
      label: t('dashboard.bars_chart.sources.geothermal'),
      color: "hsl(2 87% 67%)",
    },
  } satisfies ChartConfig

  const [chartData, setDataChart] = useState<BarProps[]>([]);
  const [hydro, setHydro] = useState<number>(0);
  const [wind, setWind] = useState<number>(0);
  const [solar, setSolar] = useState<number>(0);
  const [biofuel, setBiofuel] = useState<number>(0);
  const [geo, setGeo] = useState<number>(0);

  const {year} = useContextApp()
  
  useEffect(()=>{
    fetchBarsChartData(year)
    .then(data=>{
      setDataChart(data);
      setHydro(data[0].capacity);
      setWind(data[1].capacity);
      setSolar(data[2].capacity);
      setBiofuel(data[3].capacity);
      setGeo(data[4].capacity);
    }).catch(()=>setDataChart([]));
    
  },[year])
  
  return(
    <Card data-testid='bars-chart-component' className="relative">
      <CardHeader>
        <CardTitle className="text-[1.4rem] text-center ">{t('dashboard.bars_chart.renewable_production')}</CardTitle>
        <CardDescription className="text-[1rem] text-center">{t('dashboard.bars_chart.data_year',{year})}</CardDescription>
        <YearSelector className="z-10"/>
      </CardHeader>
      <CardContent className="min-h-[20rem]">
        {chartData.length !== 0 && <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}


          >
            <YAxis
              dataKey="source"
              type="category"
              tickLine={false}
              tickMargin={0}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
              fontSize='0.9rem'
              
            />
            <XAxis dataKey="capacity" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="p-4 text-[1.2rem]"/>}
            />
            <Bar dataKey="capacity" layout="vertical" radius={5} animationDuration={700} >
            {/* <LabelList
                dataKey="capacity"
                position="right"
                offset={8}
                className="fill-[--color-label]"
                fontSize={8}
              /> */}
            </Bar>
          </BarChart>
        </ChartContainer>}
        {chartData.length === 0 && <SpinnerComp className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center"/>}
        {/* {chartData.length === 0 && <CardDescription className="text-[2rem] text-center text-[#f46762]">Data not available to   create the chart</CardDescription>} */}
      </CardContent>
      <CardFooter>
      {chartData.length !== 0 && <div className="flex justify-start text-[1.2rem] font-bold">
          <ul className="flex flex-wrap flex-col sm:flex-row gap-6">
            <li><span className="text-white bg-[#0095ff] p-2 rounded-2xl">{t('dashboard.bars_chart.sources.hydro')}</span> = {hydro + ' TWh;'}</li>
            <li><span className="text-black bg-[#62beff] p-2 rounded-2xl">{t('dashboard.bars_chart.sources.wind')}</span> = {wind  + ' TWh;'}</li>
            <li><span className="text-black bg-[#e8c468] p-2 rounded-2xl">{t('dashboard.bars_chart.sources.solar')}</span> = {solar    + ' TWh;'}</li> 
            <li><span className="text-white bg-[#069932] p-2 rounded-2xl">{t('dashboard.bars_chart.sources.biofuel')}</span> = {biofuel    + ' TWh;'}</li>
            <li><span className="text-white bg-[#f46762] p-2 rounded-2xl">{t('dashboard.bars_chart.sources.geothermal')}</span> = {geo    + ' TWh'}</li>
          </ul> 
        </div>} 
      </CardFooter>
    </Card>
  )
}