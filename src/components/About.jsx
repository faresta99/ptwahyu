"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between bg-dua">
      {/* left - image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center">
        <Image
          className="h-auto rounded-lg"
          src="/about.png"
          alt="About Image"
          width={440}
          height={293}
        />
      </motion.div>

      {/* right - text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center md:text-left p-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I am a Front-End Developer specializing in creating modern,
          responsive, and interactive web interfaces. With expertise in HTML,
          CSS, JavaScript, and frameworks like React.js & Next.js, I am
          dedicated to building websites that are not only visually appealing
          but also high-performing and user-friendly.
        </p>
        <Link href="/contact">
          <button className="mt-6 bg-empat text-black rounded-full text-[14px] md:text-[16px] font-semibold px-5 py-2 hover:shadow-[0_0_10px_#ffcc00] transition-all duration-300">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
