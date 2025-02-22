import * as React from "react"
import { TrendingUp } from "lucide-react"
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
const chartData = [
  { browser: "hydro", participation: 275, fill: "var(--color-hydro)" },
  { browser: "wind", participation: 200, fill: "var(--color-wind)" },
  { browser: "solar", participation: 287, fill: "var(--color-solar)" },
  { browser: "otherRenewables", participation: 190, fill: "var(--color-otherRenewables)" },
]

const chartConfig = {
  participation: {
    label: "Participation",
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
    color: "hsl(27 87% 67%)",
  },
} satisfies ChartConfig

export const PieChartComp = ()=>{
const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.participation, 0)
  }, [])

  return (
    <Card data-testid='pie-chart-component' className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-[1.4rem] text-center">Consumption participation</CardTitle>
        <CardDescription className="text-[1rem] text-center">From 1965 to 2022</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="participation"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
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
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Participation
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total participation for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}