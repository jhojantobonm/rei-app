import { beforeAll, describe, expect, it } from "vitest";
import { YearSelector } from "@/components/YearSelector";
import { render, screen } from "@testing-library/react";

describe('Test YearSelector component',()=>{
  let yearSelector: HTMLElement;
  
  beforeAll(()=>{
    render(<YearSelector/>);
    screen.debug();
  
    yearSelector = screen.getByTestId('year-selector-component');
  });
  
  it('should render YearSelector component',()=>{
    expect(yearSelector).toBeInTheDocument();
  });
})