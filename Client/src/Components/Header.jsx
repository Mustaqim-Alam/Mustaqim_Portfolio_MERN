import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
const Header = () => {
  return (
    <header className="w-full h-16 shadow border-borderColor2 text-blackColor py-3 border-b sticky top-0 z-50 bg-bgColor2">
      <nav className=" w-full flex justify-around items-center ">
        <div className="">
          <Link to="/" className=" font-bold text-2xl font-fontf1">
            @mustaqim
          </Link>
        </div>
        <div>
          <ul className="flex justify-around gap-6 opacity-75 font-small font-bold  ">
            <li>
              <Link to="/project" className="">
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
            <FaGithub />
            <button>GitHub</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
