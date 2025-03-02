import { beforeAll, describe, expect, it } from "vitest";
import { ChartWrapper } from "@/components/ChartWrapper";
import { render, screen } from "@testing-library/react";

describe('Test ChartWrapper component',()=>{
  let barsChart: HTMLElement;
  
  beforeAll(()=>{
    render(<ChartWrapper/>);
    screen.debug();
  
    barsChart = screen.getByTestId('chart-wrapper-component');
  });
  
  it('should render ChartWrapper component',()=>{
    expect(barsChart).toBeInTheDocument();
  });
})