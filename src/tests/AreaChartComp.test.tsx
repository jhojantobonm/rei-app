import { beforeAll, describe, expect, it } from "vitest";
import { AreaChartComp } from "../components/AreaChartComp";
import { render, screen } from "@testing-library/react";

describe('Test AreaChartComp component',()=>{
  let areaChart: HTMLElement;
  
  beforeAll(()=>{
    render(<AreaChartComp/>);
    screen.debug();
  
    areaChart = screen.getByTestId('area-chart-component');
  });
  
  it('should render AreaChartComp',()=>{
    expect(areaChart).toBeInTheDocument();
  });
})