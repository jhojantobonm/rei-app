import { beforeAll, describe, expect, it } from "vitest";
import { DataTable } from "../components/DataTable";
import { render, screen } from "@testing-library/react";

describe('Test DataTable page',()=>{
  let home: HTMLElement;
  
  beforeAll(()=>{
    render(<DataTable/>);
    screen.debug();
  
    home = screen.getByTestId('data-table');
  });
  
  it('should render DataTable page',()=>{
    expect(home).toBeInTheDocument();
  });
})