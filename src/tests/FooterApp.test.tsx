import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FooterApp } from "../components/FooterApp";

describe('Test FooterApp component',()=>{
  let menuInfoItem: HTMLElement;
  
  beforeAll(()=>{
    render(<FooterApp/>);
    screen.debug();
  
    menuInfoItem = screen.getByTestId('footer');
  });
  
  it('should render FooterApp component',()=>{
    expect(menuInfoItem).toBeInTheDocument();
  });
})