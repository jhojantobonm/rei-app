import { beforeAll, describe, expect, it } from "vitest";
import { Dashboard } from "@/pages/Dashboard";
import { render, screen } from "@testing-library/react";

describe.skip('Test Dashboard page',()=>{
  let calculator: HTMLElement;
  
  beforeAll(()=>{
    render(<Dashboard/>);
    screen.debug();
  
    calculator = screen.getByTestId('dashboard-container');
  });
  
  it('should render Dashboard page',()=>{
    expect(calculator).toBeInTheDocument();
  });
})