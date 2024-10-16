import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-5 mt-8 w-full">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center gap-3">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Ruggery Gusmão. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/ruggerygusmao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-[30px] h-[30px] text-white md:w-[30px] md:h-[30px] sm:w-[20px] sm:h-[20px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/ruggerygusmao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-[30px] h-[30px] text-white md:w-[30px] md:h-[30px] sm:w-[20px] sm:h-[20px]" />
            </a>
            <a href="mailto:ruggery@example.com">
              <FaEnvelope className="w-[30px] h-[30px] text-white md:w-[30px] md:h-[30px] sm:w-[20px] sm:h-[20px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
