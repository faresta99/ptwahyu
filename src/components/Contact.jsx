"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-10 text-center bg-dua">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-satu p-6 rounded-lg shadow-lg"
        autoComplete="off"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}>
        <div className="mb-6">
          <label className="block text-left font-medium mb-2 text-tiga">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-transparent appearance-none border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-left font-medium mb-2 text-tiga">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-transparent appearance-none border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-left font-medium mb-2 text-tiga">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 bg-transparent appearance-none border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
            required></textarea>
        </div>

        <button
          type="submit"
          className="bg-empat text-black rounded-full px-5 py-2 text-[16px] font-semibold hover:shadow-[0_0_10px_#ffcc00] transition-all duration-300">
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
