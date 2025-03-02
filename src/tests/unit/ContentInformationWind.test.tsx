import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentInformationWind } from "@/components/ContentInformationWind";

describe('Test ContentInformationWind component',()=>{
  let wind: HTMLElement;
  
  beforeAll(()=>{
    render(<ContentInformationWind/>);
    screen.debug();
  
    wind = screen.getByTestId('content-info-wind');
  });
  
  it('should render ContentInformationWind component',()=>{
    expect(wind).toBeInTheDocument();
  });
})