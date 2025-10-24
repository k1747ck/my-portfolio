import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Khushi Kadam</h1>
      <p className="text-xl mb-6">Aspiring Software Developer | React & Tailwind Enthusiast | Java & Python Enthusiast | Exploring AI & Applications | Building Projects & Growing on GitHub</p>
      <a href="#contact" className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">Contact Me</a>
    </section>
  );
};

export default Hero;
