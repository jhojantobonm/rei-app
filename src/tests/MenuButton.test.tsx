import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MenuButton } from "../components/MenuButton";

describe('Test MenuButton component',()=>{
  let menuInfoItem: HTMLElement;
  
  beforeAll(()=>{
    render(<MenuButton/>);
    screen.debug();
  
    menuInfoItem = screen.getByTestId('menu-button');
  });
  
  it('should render MenuButton component',()=>{
    expect(menuInfoItem).toBeInTheDocument();
  });
})