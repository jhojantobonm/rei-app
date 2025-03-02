import { Label, Pie, PieChart } from "recharts"

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
import { YearSelector } from "./YearSelector"
import { useContextApp } from "@/context/useContextApp"
import { fetchPieChartData } from "@/utils/dataFetch"
import { useEffect, useState } from "react"
import { SpinnerComp } from "./SpinnerComp"

// const chartData = [
//   { source: "hydro", share: 275, fill: "var(--color-hydro)" },
//   { source: "wind", share: 200, fill: "var(--color-wind)" },
//   { source: "solar", share: 287, fill: "var(--color-solar)" },
//   { source: "otherRenewables", share: 190, fill: "var(--color-otherRenewables)" },
// ]

const chartConfig = {
  share: {
    label: "Share",
  },
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
  otherRenewables: {
    label: "Other Renewables",
    color: "hsl(300, 95%, 36%)",
  },
} satisfies ChartConfig

interface PieProps {
  source: string,
  share: number,
  fill: string
}

export const PieChartComp = ()=>{
  const [dataChart, setData] = useState<PieProps[]>([]);
  const [totalPercentage, setTotalPercentage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [hydro, setHydro] = useState<number>(0);
  const [wind, setWind] = useState<number>(0);
  const [solar, setSolar] = useState<number>(0);
  const [otherRenewables, setOtherRenewables] = useState<number>(0);




  const {year} = useContextApp();
  
  // const totalPercentage = ()=> useMemo(() => {
  //   return dataChart.reduce((acc, curr) => acc + curr.share, 0)
  // }, [])
  
  useEffect(()=>{
    fetchPieChartData(year)
    .then((data: PieProps[])=>{

      const totalShare =  Number(data.reduce((acc, curr) => acc + curr.share, 0).toFixed(2));
      const hydroShare = Number(((data[0].share * 100) / totalShare).toFixed(2)); 
      const windShare = Number(((data[1].share * 100) / totalShare).toFixed(2)); 
      const solarShare = Number(((data[2].share * 100) / totalShare).toFixed(2)); 
      const otherRenewablesShare = Number(((data[3].share * 100) / totalShare).toFixed(2)); 
      
      // const newItem: PieProps = {
      //     source: data[0].source,
      //     share: hydroShare,
      //     fill: data[0].fill,
      //   }
        
      const newData: PieProps[] = [
          {
            source: data[0].source,
            share: hydroShare,
            fill: data[0].fill,
          },
          {
            source: data[1].source,
            share: windShare,
            fill: data[1].fill,
          },
          {
            source: data[2].source,
            share: solarShare,
            fill: data[2].fill,
          },
          {
            source: data[3].source,
            share: otherRenewablesShare,
            fill: data[3].fill,
          },

          
        ];
          
      setData(newData);
    
      
      // console.log(totalShare);
      // console.log(hydroShare);
      // console.log(windShare);
      // console.log(solarShare);
      // console.log(otherRenewablesShare);

      setHydro(hydroShare);
      setWind(windShare);
      setSolar(solarShare);
      setOtherRenewables(otherRenewablesShare);
      return totalShare;
    })
    .then((totalShare)=> {
      setTotalPercentage(100)
      setTotal(totalShare)
    });
  
  },[year]);
  

  return (
    <Card data-testid='pie-chart-component' className="relative flex flex-col">
      <CardHeader className="">
        <CardTitle className="text-[1.4rem] text-center">Consumption share</CardTitle>
        <CardDescription className="text-[1rem] text-center">Data in {year} </CardDescription>
        <YearSelector className="z-10"/>
      </CardHeader>
      <CardContent className="flex-1 pb-0 min-h-[20rem]">
        {total !== 0 && <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-[40rem] w-full h-full"
          
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="p-4 text-[1.2rem]"/>}
            
            />

            <Pie
              data={dataChart}
              dataKey="share"
              nameKey="source"
              innerRadius={40}
              strokeWidth={1}
              label
              fontSize={9}
              animationDuration={500}
              
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalPercentage.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Share
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>}
        {total === 0 && <SpinnerComp/>}
        {/* {total === 0 && <CardDescription className="text-[2rem] text-center text-[#f46762]">Data not available to   create the chart</CardDescription>} */}
      </CardContent>
      <CardFooter>
      {total !== 0 && <div className="flex justify-start text-[1.2rem] font-bold">
          <ul className="flex flex-wrap flex-col sm:flex-row gap-6">
            <li><span className="text-white bg-[#0095ff] p-2 rounded-2xl">Hydro</span> = {hydro + ' %;'}</li>
            <li><span className="text-black bg-[#62beff] p-2 rounded-2xl">Wind</span> = {wind  + ' %;'}</li>
            <li><span className="text-black bg-[#e8c468] p-2 rounded-2xl">Solar</span> = {solar    + ' %;'}</li> 
            <li><span className="text-white bg-[#b305b3] p-2 rounded-2xl">Other Renewables</span> = {otherRenewables    + ' %;'}</li>
          </ul> 
        </div>}
      </CardFooter>
    </Card>
  )
}