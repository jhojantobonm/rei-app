import { beforeAll, describe, expect, it } from "vitest";
import { CarouselCompItem } from "@/components/CarouselCompItem";
import { render, screen } from "@testing-library/react";

describe('Test CarouselCompItem component',()=>{
  let carouselItem: HTMLElement;
  
  beforeAll(()=>{
    render(<CarouselCompItem/>);
    screen.debug();
  
    carouselItem = screen.getByTestId('carousel-item-component');
  });
  
  it('should render CarouselCompItem component',()=>{
    expect(carouselItem).toBeInTheDocument();
  });
})