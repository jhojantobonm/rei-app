import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentInformationGeothermal } from "../components/ContentInformationGeothermal";

describe('Test ContentInformationGeothermal component',()=>{
  let geothermal: HTMLElement;
  
  beforeAll(()=>{
    render(<ContentInformationGeothermal/>);
    screen.debug();
  
    geothermal = screen.getByTestId('content-info-geothermal');
  });
  
  it('should render ContentInformationGeothermal component',()=>{
    expect(geothermal).toBeInTheDocument();
  });
})