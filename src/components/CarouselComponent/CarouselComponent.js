import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import c from "./CarouselComponent.module.css";

const CarouselComponent = () => {
  return (
    <UncontrolledCarousel
      className={c.style}
      interval={5000}
      slide={false}
      items={[
        {
          key: 1,
          src: "https://picsum.photos/id/123/1200/600",
        },
        {
          //   altText: "Slide 2",
          //   caption: "Slide 2",
          key: 2,
          src: "https://picsum.photos/id/456/1200/600",
        },
        {
          key: 3,
          src: "https://picsum.photos/id/678/1200/600",
        },
      ]}
    />
  );
};

export default CarouselComponent;
