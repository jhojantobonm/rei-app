import { beforeAll, describe, expect, it } from "vitest";
import { CalculatorComp } from "../components/CalculatorComp";
import { render, screen } from "@testing-library/react";

describe('Test CalculatorComp component',()=>{
  let calculator: HTMLElement;
  
  beforeAll(()=>{
    render(<CalculatorComp/>);
    screen.debug();
  
    calculator = screen.getByTestId('calculator-component');
  });
  
  it('should render CalculatorComp',()=>{
    expect(calculator).toBeInTheDocument();
  });
})