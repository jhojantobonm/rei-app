import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
const chartData = [
  { month: "January", wind: 186, solar: 0, geothermal: 20 },
  { month: "February", wind: 305, solar: 100, geothermal: 400 },
  { month: "March", wind: 237, solar: 130, geothermal: 30 },
  { month: "April", wind: 73, solar: 140, geothermal: 40 },
  { month: "May", wind: 209, solar: 20, geothermal: 23 },
  { month: "June", wind: 214, solar: 100, geothermal: 500 },
]

const chartConfig = {
  wind: {
    label: "Wind",
    color: "rgb(0, 149, 255)",
  },
  solar: {
    label: "Solar",
    color: "hsl(43 74% 66%)",
  },
  geothermal: {
    label: "Geothermal",
    color: "hsl(2 87% 67%)",
  },
} satisfies ChartConfig
export const LineChartComp = ()=>{

  return (
    <Card data-testid='linear-chart-component'>
      <CardHeader>
        <CardTitle className="text-[1.4rem] text-center">Trend in installed capacity of production</CardTitle>
        <CardDescription className="text-[1rem] text-center">From 1965 to 2022</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="wind"
              type="linear"
              stroke="var(--color-wind)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="solar"
              type="linear"
              stroke="var(--color-solar)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="geothermal"
              type="linear"
              stroke="var(--color-geothermal)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}