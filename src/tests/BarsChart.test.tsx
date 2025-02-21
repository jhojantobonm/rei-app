import { beforeAll, describe, expect, it } from "vitest";
import { BarsChart } from "../components/BarsChart";
import { render, screen } from "@testing-library/react";

describe('Test BarsChart component',()=>{
  let barsChart: HTMLElement;
  
  beforeAll(()=>{
    render(<BarsChart/>);
    screen.debug();
  
    barsChart = screen.getByTestId('bars-chart-component');
  });
  
  it('should render BarsChart',()=>{
    expect(barsChart).toBeInTheDocument();
  });
})