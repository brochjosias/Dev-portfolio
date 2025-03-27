"use client"; // Essential for Next.js App Router

import { clientReviews } from "@/Data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Missing styles import
import ReviewCard from "./ReviewCard"; // You'll need to create this component

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 40, // Added for better spacing
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
};

const Slider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
    >
      {clientReviews.map((review) => (
        <div key={review.image}>
          <ReviewCard review={review} />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
