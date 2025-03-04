import { beforeAll, describe, expect, it } from "vitest";
import { Calculator } from "@/pages/Calculator";
import { render, screen } from "@testing-library/react";

describe.skip('Test Calculator page',()=>{
  let calculator: HTMLElement;
  
  beforeAll(()=>{
    render(<Calculator/>);
    screen.debug();
  
    calculator = screen.getByTestId('calculator-container');
  });
  
  it('should render Calculator page',()=>{
    expect(calculator).toBeInTheDocument();
  });
})