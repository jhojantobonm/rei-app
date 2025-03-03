import { beforeAll, describe, expect, it } from "vitest";
import { LangSelector } from "@/components/LangSelector";
import { render, screen } from "@testing-library/react";

describe('Test LangSelector component',()=>{
  let langSelector: HTMLElement;
  
  beforeAll(()=>{
    render(<LangSelector/>);
    screen.debug();
  
    langSelector = screen.getByTestId('lang-selector-component');
  });
  
  it('should render LangSelector component',()=>{
    expect(langSelector).toBeInTheDocument();
  });
})