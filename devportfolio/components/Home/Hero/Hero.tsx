import React from "react";
import { BaseInfo } from "@/Data/data";
import { FaDownload } from "react-icons/fa";
import Image from "next/image"; // Importe o componente Image

const Hero = () => {
  // Função para download dos arquivos
  const handleDownload = (file: string) => {
    // Cria um link temporário
    const link = document.createElement("a");
    link.href = `/arquivos/${file}`; // Caminho ajustado para a pasta arquivos
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            {/* Sub Heading */}
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              I am {BaseInfo.name}
            </h1>

            {/* Title */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]"
            >
              {BaseInfo.position}
            </h1>

            {/* Description */}
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white text-opacity-60"
            >
              {BaseInfo.description}
            </p>

            {/* Botões lado a lado */}
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="flex flex-wrap gap-4 mt-8"
            >
              <button
                onClick={() => handleDownload("Josias_Broch_Currículo.pdf")}
                className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer"
              >
                <span>Download CV Português</span>
                <FaDownload />
              </button>

              <button
                onClick={() => handleDownload("Josias_Broch_Curriculum.pdf")}
                className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer"
              >
                <span>Download CV English</span>
                <FaDownload />
              </button>
            </div>
          </div>
          {/* Image content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden w-[500px] h-[500px] relative"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              fill
              className="object-cover rounded-[2.85rem]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
