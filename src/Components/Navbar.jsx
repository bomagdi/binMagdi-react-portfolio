import logo from "../assets/boMagdi.png";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-6">
      <div>
        <img src={logo} alt="logo" className="w-16 mx-2 cursor-pointer" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl ">
        <a href="https://github.com/bomagdi">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/sami.magdi/">
          <FaInstagram />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
