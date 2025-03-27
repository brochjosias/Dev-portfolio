import React from "react";
import Slider from "./Slider";
import SectionHeading from "@/components/Helper/SectionHeading";

const Reviews = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>Client Reviews</SectionHeading>
      <div className="w-[98%] sm:w-[88%] mx-auto mt-20">
        <Slider />
      </div>
    </div>
  );
};

export default Reviews;
