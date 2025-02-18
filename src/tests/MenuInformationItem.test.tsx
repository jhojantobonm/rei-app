import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MenuInformationItem } from "../components/MenuInformationItem";

describe('Test MenuInformationItem component',()=>{
  let menuInfoItem: HTMLElement;
  
  beforeAll(()=>{
    render(<MenuInformationItem/>);
    screen.debug();
  
    menuInfoItem = screen.getByTestId('menu-info-item');
  });
  
  it('should render MenuInformationItem component',()=>{
    expect(menuInfoItem).toBeInTheDocument();
  });
})