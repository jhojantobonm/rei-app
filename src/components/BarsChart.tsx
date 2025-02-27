import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
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

export const BarsChart = ()=>{
  const [dataChart, setData] = useState<unknown[]>([])
  useEffect(()=>{
    fetchBarsChartData().then(data=>setData(data));
  },[])
  

  return(
    <Card data-testid='bars-chart-component'>
      <CardHeader>
        <CardTitle className="text-[1.4rem] text-center">Renewable energy production</CardTitle>
        <CardDescription className="text-[1rem] text-center">From 1965 to 2022</CardDescription>
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
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
              fontSize='0.8rem'
            />
            <XAxis dataKey="capacity" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="capacity" layout="vertical" radius={5}>
            <LabelList
                dataKey="capacity"
                position="right"
                offset={8}
                className="fill-[--color-label]"
                fontSize={8}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}