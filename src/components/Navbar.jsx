import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVercel, SiGmail } from "react-icons/si"; // Importing Vercel and Gmail icons

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Logo or Brand */}
        <h1 className="text-gray-300 lg:text-5xl text-4xl">{'<HK>'}</h1>
      </div>

      {/* Social Icons with Links */}
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/hashir-khan-b90b60280/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        {/* Vercel */}
        <a href="https://vercel.com/hashirnadeemkhans-projects" target="_blank" rel="noopener noreferrer">
          <SiVercel />
        </a>

  {/* Gmail */}
  <a href="mailto:khashir657@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;