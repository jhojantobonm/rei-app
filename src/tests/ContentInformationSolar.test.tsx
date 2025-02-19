import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentInformationSolar } from "../components/ContentInformationSolar";

describe('Test ContentInformationSolar component',()=>{
  let solar: HTMLElement;
  
  beforeAll(()=>{
    render(<ContentInformationSolar/>);
    screen.debug();
  
    solar = screen.getByTestId('content-info-solar');
  });
  
  it('should render ContentInformationSolar component',()=>{
    expect(solar).toBeInTheDocument();
  });
})