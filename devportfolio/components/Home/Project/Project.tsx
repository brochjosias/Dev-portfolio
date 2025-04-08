import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/Helper/SectionHeading";
import { projectData } from "@/Data/data";

const Project = () => {
  return (
    <div id="projects" className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            key={project.id}
            className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
          >
            <Link href={project.url} target="_blank" className="block">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={200}
                className="w-full"
              />
              <h3 className="mt-4 text-xl font-semibold text-white text-center">
                {project.name}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
