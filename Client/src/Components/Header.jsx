import { Link } from "react-router-dom";
import { PiGithubLogoLight } from "react-icons/pi";
import { MdOutlineLightMode } from "react-icons/md";
const Header = () => {
  return (
    <header className=" bg-bgColor1 text-white  py-3 w-screen ">
      <nav className="flex justify-around  ">
        <div className="">
          <Link to="/" className=" font-bold text-3xl font-fontf1">
            Mustaqim
          </Link>
        </div>
        <div>
          <ul className="flex justify-around gap-4 opacity-75 font-medium ">
            <li>
              <Link to="/project" className=" ">
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
          <div className=" text-2xl">
            <MdOutlineLightMode />
          </div>
          <div className="flex items-center opacity-75 border-solid border-2 px-4 py-1 gap-1 rounded-lg border-gray   ">
            <PiGithubLogoLight />
            <button>GitHub</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
