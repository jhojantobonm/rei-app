import { TrendingUp } from "lucide-react"
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

const chartData = [
  { source: "hydro", capacity: 5, fill: "var(--color-hydro)" },
  { source: "wind", capacity: 200, fill: "var(--color-wind)" },
  { source: "solar", capacity: 187, fill: "var(--color-solar)" },
  { source: "biofuel", capacity: 173, fill: "var(--color-biofuel)" },
  { source: "geothermal", capacity: 90, fill: "var(--color-geothermal)" },
]

const chartConfig = {
  // capacity: {
  //   label: "Visitors",
  // },
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
    color: "hsl(27 87% 67%)",
  },
} satisfies ChartConfig

export const BarsChart = ()=>{

  return(
    // <div data-testid='bars-chart-component' className="">
    //   <h2 className="text-[1.5rem] text-center font-semibold">Renewable Energy Production by Source</h2>
    //   <p className="text-[1.4rem] mt-3.5">Shows the amount of energy produced by each renewable source.</p>
      
    // </div>
    <Card data-testid='bars-chart-component' className="text-[1.4rem]">
      <CardHeader>
        <CardTitle>Renewable energy production</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
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
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="capacity" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="capacity" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total capacity for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}