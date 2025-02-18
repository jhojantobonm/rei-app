import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentInformationSolar } from "../components/ContentInformationSolar";

describe('Test ContentInformationSolar component',()=>{
  let menuInfoItem: HTMLElement;
  
  beforeAll(()=>{
    render(<ContentInformationSolar/>);
    screen.debug();
  
    menuInfoItem = screen.getByTestId('content-info-solar');
  });
  
  it('should render ContentInformationSolar component',()=>{
    expect(menuInfoItem).toBeInTheDocument();
  });
})