import React from "react";
import { BaseInfo } from "@/Data/data";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  const handleDownload = (file: string) => {
    const link = document.createElement("a");
    link.href = `/arquivos/${file}`;
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
            <h1
              data-aos="fade-right"
              data-aos-delay="50"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              I am {BaseInfo.name}
            </h1>

            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]"
            >
              {BaseInfo.position}
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="150"
              className="mt-6 text-sm md:text-base text-white text-opacity-60"
            >
              {BaseInfo.description}
            </p>

            {/* Botões de download */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="flex flex-wrap gap-4 mt-8"
            >
              <button
                onClick={() => handleDownload("Josias_Broch_Currículo.pdf")}
                className="md:px-7 md:py-2.5 px-5 py-1.5 text-sm md:text-base text-white font-semibold transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer"
              >
                <span>Download CV Português</span>
                <FaDownload className="text-sm" />
              </button>

              <button
                onClick={() => handleDownload("Josias_Broch_Curriculum.pdf")}
                className="md:px-7 md:py-2.5 px-5 py-1.5 text-sm md:text-base text-white font-semibold transition-all duration-200 rounded-lg bg-blue-700 hover:bg-blue-900 flex items-center space-x-2 cursor-pointer"
              >
                <span>Download CV English</span>
                <FaDownload className="text-sm" />
              </button>
            </div>

            {/* Ícones de redes sociais */}
            <div
              data-aos="fade-right"
              data-aos-delay="250"
              className="flex gap-6 mt-6"
            >
              <a
                href="https://github.com/brochjosias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-purple-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/josiasbroch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-white hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Image content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="mx-auto hidden lg:block relative -mt-20"
            style={{ width: "400px", height: "400px" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={420}
                height={420}
                className="object-contain rounded-lg"
                style={{
                  filter: "drop-shadow(0 0 25px rgba(135, 80, 247, 0.6))",
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
