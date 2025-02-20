import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Menu } from "../components/Menu";

describe('Test Menu component',()=>{
  let menuInfoItem: HTMLElement;
  
  beforeAll(()=>{
    render(<Menu/>);
    screen.debug();
  
    menuInfoItem = screen.getByTestId('menu');
  });
  
  it('should render Menu component',()=>{
    expect(menuInfoItem).toBeInTheDocument();
  });
})