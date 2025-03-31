import SectionHeading from "@/components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image"; // Importe o componente Image

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/* Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Front-end Development
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Back-end Development
              </p>
            </div>
          </div>
        </div>
        {/* Stats Content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="flex flex-col items-center"
        >
          {/* Imagem superior centralizada */}
          <div className="text-center mb-8">
            <Image
              src="/imagens/customer.png"
              alt="Happy customers"
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-3 font-bold text-xl text-white">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-400">
              Satisfied Customers
            </p>
          </div>

          {/* Duas imagens inferiores lado a lado */}
          <div className="grid grid-cols-2 gap-60">
            <div className="text-center">
              <Image
                src="/imagens/experience.png"
                alt="Years experience"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-white">
                {aboutInfo.experience}
              </p>
              <p className="text-base sm:text-lg text-gray-400">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/imagens/completed.png"
                alt="Completed projects"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-white">
                {aboutInfo.project}
              </p>
              <p className="text-base sm:text-lg text-gray-400">
                Completed Project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
