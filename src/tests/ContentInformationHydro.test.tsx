import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentInformationHydro } from "../components/ContentInformationHydro";

describe('Test ContentInformationHydro component',()=>{
  let hydro: HTMLElement;
  
  beforeAll(()=>{
    render(<ContentInformationHydro/>);
    screen.debug();
  
    hydro = screen.getByTestId('content-info-hydro');
  });
  
  it('should render ContentInformationHydro component',()=>{
    expect(hydro).toBeInTheDocument();
  });
})