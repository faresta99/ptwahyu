"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "My Portfolio",
      image: "/pp.png",
      description:
        "This website is made using Next JS and Tailwind CSS, uploaded to GitHub and hosted using Vercel",
    },
    {
      id: 2,
      title: "PT.SFI",
      image: "/sfi.png",
      description:
        "This website is made using React JS and Tailwind CSS, uploaded to GitHub and hosted using Vercel",
    },
    {
      id: 3,
      title: "Portfolio Ndu",
      image: "/ndu.png",
      description:
        "This website is made using React JS and Tailwind CSS, uploaded to GitHub and hosted using Vercel",
    },
    {
      id: 4,
      title: "Cs Shoop",
      image: "/cs.png",
      description:
        "This website is made using React JS and Tailwind CSS, uploaded to GitHub and hosted using Vercel",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 md:px-10 text-center bg-satu">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="shadow-lg rounded-lg bg-empat/10 p-4">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={400}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
            <button className="bg-empat text-black rounded-full text-[14px] md:text-[16px] font-normal px-6 py-1 hover:shadow-[0_0_10px_#ffcc00] transition-all duration-300 my-4 ">
              See More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
