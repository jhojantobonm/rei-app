import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
import { useEffect, useMemo, useState } from "react"
import { fetchAreaChartData } from "@/utils/dataFetch"  
import { useContextApp } from "@/context/useContextApp"
import { SpinnerComp } from "./SpinnerComp"
import { useTranslation } from "react-i18next"

// const chartData = [
//   { year: "January", conventional: 186, renewables: 80 },
//   { year: "February", conventional: 305, renewables: 200 },
//   { year: "March", conventional: 237, renewables: 120 },
//   { year: "April", conventional: 73, renewables: 190 },
//   { year: "May", conventional: 209, renewables: 130 },
//   { year: "June", conventional: 214, renewables: 140 },
// ]



interface AreaProps {
  year: string,
  conventional: number,
  renewables: number,

}


export const AreaChartComp = ()=>{
    const {t} = useTranslation();

    const chartConfig = useMemo(()=>(
      {
        conventional: {
          label: t('dashboard.area_chart.sources.conventional'),
          color: "hsl(2 87% 67%)",
        },
        renewables: {
          label: t('dashboard.area_chart.sources.renewables'),
          color: "rgb(6, 153, 50)",
        },
      } satisfies ChartConfig
    ),[])
  
    const [chartData, setChartData] = useState<AreaProps[]>([]);
    const {year} = useContextApp();
  
    useEffect(()=>{
      fetchAreaChartData()
        .then(data => {
          setChartData(data)
        }).catch(()=>setChartData([]))
    },[year])
  


  return(
    <Card data-testid='area-chart-component' className="relative">
      <CardHeader>
      <CardTitle className="text-[1.4rem] text-center">{t('dashboard.area_chart.comparison')}</CardTitle>
      <CardDescription className="text-[1rem] text-center">{t('dashboard.area_chart.data_range')}</CardDescription>
      </CardHeader>
      <CardContent>

      <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent className="p-4 text-[1.2rem]"/>} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-conventional)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-conventional)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-renewables)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-renewables)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="renewables"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-renewables)"
              stackId="a"
            />
            <Area
              dataKey="conventional"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-conventional)"
              stackId="a"
            />

          </AreaChart>
      </ChartContainer> 
      {chartData.length === 0 && <SpinnerComp className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center"/>}
      

      {/* {chartData.length === 0 && <CardDescription className="text-[2rem] text-center text-[#f46762]">Data not available to   create the chart</CardDescription>} */}

      </CardContent>
      <CardFooter>
      {chartData.length !== 0 && <div className="flex justify-start text-[1.2rem] font-bold">
          <ul className="flex flex-wrap flex-col sm:flex-row gap-6">
            <li><span className="text-white bg-[#069932] p-2 rounded-2xl">{t('dashboard.area_chart.sources.renewables')}</span></li>
            <li><span className="text-white bg-[#f46762] p-2 rounded-2xl">{t('dashboard.area_chart.sources.conventional')}</span></li>
          </ul> 
        </div>} 
      </CardFooter>
    </Card>
  )
}