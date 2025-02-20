import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DataSelector } from "../components/DataSelector";

describe('Test DataSelector component',()=>{
  let menuInfo: HTMLElement;
  
  beforeAll(()=>{
    render(<DataSelector/>);
    screen.debug();
  
    menuInfo = screen.getByTestId('data-selector');
  });
  
  it('should render DataSelector component',()=>{
    expect(menuInfo).toBeInTheDocument();
  });
})