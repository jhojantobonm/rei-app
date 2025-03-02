import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MenuInformation } from "@/components/MenuInformation";

describe('Test MenuInformation component',()=>{
  let menuInfo: HTMLElement;
  
  beforeAll(()=>{
    render(<MenuInformation/>);
    screen.debug();
  
    menuInfo = screen.getByTestId('menu-info');
  });
  
  it('should render MenuInformation component',()=>{
    expect(menuInfo).toBeInTheDocument();
  });
})