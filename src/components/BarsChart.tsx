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

// const chartData = [
//   { source: "hydro", capacity: 500, fill: "var(--color-hydro)" },
//   { source: "wind", capacity: 200, fill: "var(--color-wind)" },
//   { source: "solar", capacity: 187, fill: "var(--color-solar)" },
//   { source: "biofuel", capacity: 173, fill: "var(--color-biofuel)" },
//   { source: "geothermal", capacity: 90, fill: "var(--color-geothermal)" },
// ]


const chartConfig = {
  hydro: {
    label: "Hydro",
    color: "rgb(0, 149, 255)",
  },
  wind: {
    label: "Wind",
    color: "rgb(98, 190, 255)",
  },
  solar: {
    label: "Solar",
    color: "hsl(43 74% 66%)",
  },
  biofuel: {
    label: "Biofuel",
    color: "rgb(6, 153, 50)",
  },
  geothermal: {
    label: "Geothermal",
    color: "hsl(2 87% 67%)",
  },
} satisfies ChartConfig

interface BarProps {
  source: string,
  capacity: number,
  fill: string
}

export const BarsChart = ()=>{
  const [dataChart, setData] = useState<BarProps[]>([]);
  const [hydro, setHydro] = useState<number>(0);
  const [wind, setWind] = useState<number>(0);
  const [solar, setSolar] = useState<number>(0);
  const [biofuel, setBiofuel] = useState<number>(0);
  const [geo, setGeo] = useState<number>(0);


  const {year} = useContextApp()
  
  useEffect(()=>{
    fetchBarsChartData(year).then(data=>{
      setData(data);
      setHydro(data[0].capacity);
      setWind(data[1].capacity);
      setSolar(data[2].capacity);
      setBiofuel(data[3].capacity);
      setGeo(data[4].capacity);
    });
    
  },[year])
  
  return(
    <Card data-testid='bars-chart-component'>
      <CardHeader>
        <CardTitle className="text-[1.4rem] text-center">Renewable energy production</CardTitle>
        <CardDescription className="text-[1rem] text-center">Data in {year}</CardDescription>
        <YearSelector/>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={dataChart}
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
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-start text-[1.2rem]">
        <div>
          <ul className="flex flex-wrap flex-col sm:flex-row gap-6">
            <li><span className="text-white bg-[#0095ff] p-2 rounded-2xl">Hydro</span> = {hydro + ' TWh;'}</li>
            <li><span className="text-white bg-[#62beff] p-2 rounded-2xl">Wind</span> = {wind  + ' TWh;'}</li>
            <li><span className="text-white bg-[#e8c468] p-2 rounded-2xl">Solar</span> = {solar    + ' TWh;'}</li> 
            <li><span className="text-white bg-[#069932] p-2 rounded-2xl">Biofuel</span> = {biofuel    + ' TWh;'}</li>
            <li><span className="text-white bg-[#f46762] p-2 rounded-2xl">Geothermal</span> = {geo    + ' TWh'}</li>
          </ul> 
        </div>  
      </CardFooter>
    </Card>
  )
}