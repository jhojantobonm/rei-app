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
  { year: "1965", wind: 186, solar: 0, geothermal: 20 },
  { year: "1966", wind: 305, solar: 100, geothermal: 400 },
  { year: "1967", wind: 237, solar: 130, geothermal: 30 },
  { year: "1968", wind: 73, solar: 140, geothermal: 40 },
  { year: "1969", wind: 209, solar: 20, geothermal: 23 },
  { year: "1971", wind: 214, solar: 100, geothermal: 500 },
  { year: "1972", wind: 214, solar: 100, geothermal: 500 },
  { year: "1973", wind: 214, solar: 100, geothermal: 500 },
  { year: "1974", wind: 214, solar: 100, geothermal: 500 },
  { year: "1975", wind: 214, solar: 100, geothermal: 500 },
  { year: "1976", wind: 214, solar: 100, geothermal: 500 },
  { year: "1977", wind: 214, solar: 100, geothermal: 500 },
  { year: "1978", wind: 214, solar: 100, geothermal: 500 },
  { year: "1979", wind: 214, solar: 100, geothermal: 500 },
  { year: "1980", wind: 214, solar: 100, geothermal: 500 },
  { year: "1981", wind: 214, solar: 100, geothermal: 500 },
  { year: "1982", wind: 214, solar: 100, geothermal: 500 },
  { year: "1983", wind: 214, solar: 100, geothermal: 500 },
  { year: "1984", wind: 214, solar: 100, geothermal: 500 },
  { year: "1985", wind: 214, solar: 100, geothermal: 500 },
  { year: "1986", wind: 214, solar: 100, geothermal: 500 },
  { year: "1987", wind: 214, solar: 100, geothermal: 500 },
  { year: "1988", wind: 214, solar: 100, geothermal: 500 },
  { year: "1989", wind: 214, solar: 100, geothermal: 500 },
  { year: "1990", wind: 214, solar: 100, geothermal: 500 },
  { year: "1991", wind: 214, solar: 100, geothermal: 500 },
  { year: "1992", wind: 214, solar: 100, geothermal: 500 },
  { year: "1993", wind: 214, solar: 100, geothermal: 500 },
  { year: "1994", wind: 214, solar: 100, geothermal: 500 },
  { year: "1995", wind: 214, solar: 100, geothermal: 500 },
  { year: "1996", wind: 214, solar: 100, geothermal: 500 },
  { year: "1997", wind: 214, solar: 100, geothermal: 500 },
  { year: "1998", wind: 214, solar: 100, geothermal: 500 },
  { year: "1999", wind: 214, solar: 100, geothermal: 500 },
  { year: "2000", wind: 214, solar: 100, geothermal: 500 },
  { year: "2001", wind: 214, solar: 100, geothermal: 500 },
  { year: "2002", wind: 214, solar: 100, geothermal: 500 },
  { year: "2003", wind: 214, solar: 100, geothermal: 500 },
  { year: "2004", wind: 214, solar: 100, geothermal: 500 },
  { year: "2005", wind: 214, solar: 100, geothermal: 500 },
  { year: "2006", wind: 214, solar: 100, geothermal: 500 },
  { year: "2007", wind: 214, solar: 100, geothermal: 500 },
  { year: "2008", wind: 214, solar: 100, geothermal: 500 },
  { year: "2009", wind: 214, solar: 100, geothermal: 500 },
  { year: "2010", wind: 214, solar: 100, geothermal: 500 },
  { year: "2011", wind: 214, solar: 100, geothermal: 500 },
  { year: "2012", wind: 214, solar: 100, geothermal: 500 },
  { year: "2013", wind: 214, solar: 100, geothermal: 500 },
  { year: "2014", wind: 214, solar: 100, geothermal: 500 },
  { year: "2015", wind: 214, solar: 100, geothermal: 500 },
  { year: "2016", wind: 214, solar: 100, geothermal: 500 },
  { year: "2017", wind: 214, solar: 100, geothermal: 500 },
  { year: "2018", wind: 214, solar: 100, geothermal: 500 },
  { year: "2019", wind: 214, solar: 100, geothermal: 500 },
  { year: "2020", wind: 214, solar: 100, geothermal: 500 },
  { year: "2021", wind: 214, solar: 100, geothermal: 500 },
  { year: "2022", wind: 214, solar: 100, geothermal: 500 },
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
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="p-4 text-[1.2rem]"/>}
            />
            <Line
              dataKey="wind"
              type="linear"
              stroke="var(--color-wind)"
              strokeWidth={2}
              dot={false}
              animationDuration={1000}
              />
            <Line
              dataKey="solar"
              type="linear"
              stroke="var(--color-solar)"
              strokeWidth={2}
              dot={false}
              animationDuration={2000}
              />
            <Line
              dataKey="geothermal"
              type="linear"
              stroke="var(--color-geothermal)"
              strokeWidth={2}
              dot={false}
              animationDuration={3000}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}