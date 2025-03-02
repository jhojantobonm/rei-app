import { beforeAll, describe, expect, it } from "vitest";
import { Home } from "@/pages/Home";
import { render, screen } from "@testing-library/react";

describe('Test Home page',()=>{
  let home: HTMLElement;
  
  beforeAll(()=>{
    render(<Home/>);
    screen.debug();
  
    home = screen.getByTestId('home-container');
  });
  
  it('should render Home page',()=>{
    expect(home).toBeInTheDocument();
  });
})