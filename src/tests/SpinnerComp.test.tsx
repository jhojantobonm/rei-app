import { beforeAll, describe, expect, it } from "vitest";
import { SpinnerComp } from "../components/SpinnerComp";
import { render, screen } from "@testing-library/react";

describe('Test SpinnerComp component',()=>{
  let spinner: HTMLElement;
  
  beforeAll(()=>{
    render(<SpinnerComp/>);
    screen.debug();
  
    spinner = screen.getByTestId('spinner-component');
  });
  
  it('should render SpinnerComp',()=>{
    expect(spinner).toBeInTheDocument();
  });
})