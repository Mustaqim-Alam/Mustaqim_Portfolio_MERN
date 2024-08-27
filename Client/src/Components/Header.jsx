import { Link } from "react-router-dom";
import { PiGithubLogoLight } from "react-icons/pi";
const Header = () => {
  return (
    <header className=" bg-slate-400 py-3 w-screen ">
      <nav className="flex justify-around  ">
        <div className="">
          <Link to="/" className=" font-bold text-2xl font-fontf1">
            Mustaqim
          </Link>
        </div>
        <div>
          <ul className="flex justify-around gap-4 font-medium font-fontf1 ">
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
        <div className="flex items-center border-solid border-2 px-4 gap-1 rounded-lg border-black font-fontf1 ">
          <PiGithubLogoLight />
          <button>GitHub</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
