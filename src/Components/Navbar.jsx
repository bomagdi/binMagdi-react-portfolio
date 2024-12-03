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
        <FaGithub />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </nav>
  );
};

export default Navbar;
