import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentInformationBioFuel } from "@/components/ContentInformationBioFuel";

describe('Test ContentInformationBioFuel component',()=>{
  let bioFuel: HTMLElement;
  
  beforeAll(()=>{
    render(<ContentInformationBioFuel/>);
    screen.debug();
  
    bioFuel = screen.getByTestId('content-info-biofuel');
  });
  
  it('should render ContentInformationBioFuel component',()=>{
    expect(bioFuel).toBeInTheDocument();
  });
})