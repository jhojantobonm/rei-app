import { beforeAll, describe, expect, it } from "vitest";
import { CarouselComp } from "../components/CarouselComp";
import { render, screen } from "@testing-library/react";

describe('Test CarouselComp component',()=>{
  let carousel: HTMLElement;
  
  beforeAll(()=>{
    render(<CarouselComp/>);
    screen.debug();
  
    carousel = screen.getByTestId('carousel-component');
  });
  
  it('should render CarouselComp component',()=>{
    expect(carousel).toBeInTheDocument();
  });
})