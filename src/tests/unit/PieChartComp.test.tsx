import { beforeAll, describe, expect, it } from "vitest";
import { PieChartComp } from "@/components/PieChartComp";
import { render, screen } from "@testing-library/react";

describe.skip('Test PieChartComp component',()=>{
  let barsChart: HTMLElement;
  
  beforeAll(()=>{
    render(<PieChartComp/>);
    screen.debug();
  
    barsChart = screen.getByTestId('pie-chart-component');
  });
  
  it('should render PieChartComp',()=>{
    expect(barsChart).toBeInTheDocument();
  });
})