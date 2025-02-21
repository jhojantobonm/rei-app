import { beforeAll, describe, expect, it } from "vitest";
import { BarsChart } from "../components/BarsChart";
import { render, screen } from "@testing-library/react";

describe('Test BarsChart page',()=>{
  let calculator: HTMLElement;
  
  beforeAll(()=>{
    render(<BarsChart/>);
    screen.debug();
  
    calculator = screen.getByTestId('bars-chart-component');
  });
  
  it('should render BarsChart',()=>{
    expect(calculator).toBeInTheDocument();
  });
})