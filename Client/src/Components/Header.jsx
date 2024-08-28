import { Link } from "react-router-dom";
import { PiGithubLogoLight } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";
const Header = () => {
  return (
    <header className=" bg-bgColor2 text-blackColor  py-3 w-screen   ">
      <nav className="flex justify-around  ">
        <div className="">
          <Link to="/" className=" font-bold text-3xl font-fontf1">
            Mustaqim
          </Link>
        </div>
        <div>
          <ul className="flex justify-around gap-4 opacity-95 font-medium ">
            <li>
              <Link to="/project" className=" hover:bg-hoverColor ">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience" className="">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/article" className="">
                Article
              </Link>
            </li>
            <li>
              <Link to="/contact" className="">
                Connect with me
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex justify-around items-center gap-4">
          <div className=" text-2xl cursor-pointer">
            <MdOutlineLightMode />
          </div>
          <Link
            to="https://github.com/Mustaqim-Alam"
            target="_blank"
            className="flex items-center  border-solid border-2 px-4 py-1 gap-1 rounded-lg  border-borderColor2  "
          >
            <PiGithubLogoLight />
            <button>GitHub</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
