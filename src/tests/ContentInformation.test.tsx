import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentInformation } from "../components/ContentInformation";

describe('Test ContentInformation component',()=>{
  let menuInfoItem: HTMLElement;
  
  beforeAll(()=>{
    render(<ContentInformation/>);
    screen.debug();
  
    menuInfoItem = screen.getByTestId('content-info');
  });
  
  it('should render ContentInformation component',()=>{
    expect(menuInfoItem).toBeInTheDocument();
  });
})