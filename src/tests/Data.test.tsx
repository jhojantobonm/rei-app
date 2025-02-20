import { beforeAll, describe, expect, it } from "vitest";
import { Data } from "../pages/Data";
import { render, screen } from "@testing-library/react";

describe('Test Data page',()=>{
  let home: HTMLElement;
  
  beforeAll(()=>{
    render(<Data/>);
    screen.debug();
  
    home = screen.getByTestId('data-container');
  });
  
  it('should render Data page',()=>{
    expect(home).toBeInTheDocument();
  });
})