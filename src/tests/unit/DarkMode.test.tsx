import { beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DarkMode } from "@/components/DarkMode";

describe('Test DarkMode component',()=>{
  let darkMode: HTMLElement;
  
  beforeAll(()=>{
    render(<DarkMode/>);
    screen.debug();
  
    darkMode = screen.getByTestId('dark-mode');
  });
  
  it('should render DarkMode component',()=>{
    expect(darkMode).toBeInTheDocument();
  });
})