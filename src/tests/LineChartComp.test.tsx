import { beforeAll, describe, expect, it } from "vitest";
import { LineChartComp } from "../components/LineChartComp";
import { render, screen } from "@testing-library/react";

describe('Test LineChartComp component',()=>{
  let lineChart: HTMLElement;
  
  beforeAll(()=>{
    render(<LineChartComp/>);
    screen.debug();
  
    lineChart = screen.getByTestId('linear-chart-component');
  });
  
  it('should render LineChartComp',()=>{
    expect(lineChart).toBeInTheDocument();
  });
})