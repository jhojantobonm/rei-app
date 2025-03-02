import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HeaderApp } from "@/components/HeaderApp";

describe('Test Header component',()=>{
  let menuInfoItem: HTMLElement;
  
  beforeAll(()=>{
    render(<HeaderApp/>);
    screen.debug();
  
    menuInfoItem = screen.getByTestId('header');
  });
  
  it('should render Header component',()=>{
    expect(menuInfoItem).toBeInTheDocument();
  });
})